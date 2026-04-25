import { NextResponse } from "next/server";
import tls from "node:tls";

export const runtime = "nodejs";

type MailOptions = {
  appPassword: string;
  from: string;
  subject: string;
  text: string;
  to: string;
};

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function dotStuff(value: string) {
  return value.replace(/^\./gm, "..");
}

function sendCommand(socket: tls.TLSSocket, command: string) {
  socket.write(`${command}\r\n`);
}

function waitForResponse(socket: tls.TLSSocket, expected: string[]) {
  return new Promise<string>((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onData = (chunk: Buffer | string) => {
      buffer += chunk.toString();
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const last = lines.at(-1);

      if (!last || !/^\d{3} /.test(last)) return;

      cleanup();
      const code = last.slice(0, 3);
      if (expected.includes(code)) {
        resolve(buffer);
      } else {
        reject(new Error(`SMTP error ${code}`));
      }
    };

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function command(socket: tls.TLSSocket, line: string, expected: string[]) {
  sendCommand(socket, line);
  return waitForResponse(socket, expected);
}

async function sendGmail(options: MailOptions) {
  const socket = tls.connect(465, "smtp.gmail.com", {
    servername: "smtp.gmail.com",
  });

  socket.setEncoding("utf8");

  try {
    await waitForResponse(socket, ["220"]);
    await command(socket, "EHLO localhost", ["250"]);
    await command(socket, "AUTH LOGIN", ["334"]);
    await command(socket, Buffer.from(options.from).toString("base64"), ["334"]);
    await command(socket, Buffer.from(options.appPassword).toString("base64"), ["235"]);
    await command(socket, `MAIL FROM:<${options.from}>`, ["250"]);
    await command(socket, `RCPT TO:<${options.to}>`, ["250", "251"]);
    await command(socket, "DATA", ["354"]);

    const message = [
      `From: ${encodeHeader("SendReady Landing")} <${options.from}>`,
      `To: <${options.to}>`,
      `Subject: ${encodeHeader(options.subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      dotStuff(options.text),
      ".",
    ].join("\r\n");

    socket.write(`${message}\r\n`);
    await waitForResponse(socket, ["250"]);
    await command(socket, "QUIT", ["221"]);
  } finally {
    socket.end();
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (field(formData, "website")) {
    return NextResponse.json({ ok: true });
  }

  const company = field(formData, "company");
  const name = field(formData, "name");
  const email = field(formData, "email");

  if (!company || !name || !email || !email.includes("@")) {
    return NextResponse.json(
      { message: "入力内容を確認してください。" },
      { status: 400 },
    );
  }

  const from = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const to = process.env.SIGNUP_NOTIFY_TO ?? from;

  if (!from || !appPassword || !to) {
    return NextResponse.json(
      { message: "メール通知の環境変数が未設定です。" },
      { status: 500 },
    );
  }

  await sendGmail({
    appPassword,
    from,
    to,
    subject: "SendReady 先行登録がありました",
    text: [
      "SendReady LPから先行登録がありました。",
      "",
      `会社名: ${company}`,
      `氏名: ${name}`,
      `メールアドレス: ${email}`,
      "",
      `受信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}

"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function SignupForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message ?? "送信に失敗しました。");
      }

      form.reset();
      setState("sent");
      setMessage("送信しました。");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    }
  }

  return (
    <form onSubmit={submit}>
      <input name="company" placeholder="会社名" required />
      <input name="name" placeholder="氏名" required />
      <input name="email" placeholder="メールアドレス" required type="email" />
      <input
        aria-hidden="true"
        autoComplete="off"
        className="signup-trap"
        name="website"
        tabIndex={-1}
      />
      <button disabled={state === "sending"} type="submit">
        {state === "sending" ? "送信中..." : "30社限定で先行登録する"} <ArrowRight size={18} />
      </button>
      {message ? <p className={`signup-status ${state}`}>{message}</p> : null}
    </form>
  );
}

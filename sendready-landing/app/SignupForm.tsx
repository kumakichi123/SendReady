"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function SignupForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const showModal = state === "sending" || state === "sent" || state === "error";

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
      setMessage("");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    }
  }

  return (
    <>
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
        {state === "error" && message ? <p className={`signup-status ${state}`}>{message}</p> : null}
      </form>

      {showModal ? (
        <div className="signup-modal" role="dialog" aria-modal="true" aria-labelledby="signup-modal-title">
          <div className="signup-modal__panel">
            {state !== "sending" ? (
              <button
                className="signup-modal__close"
                type="button"
                aria-label="閉じる"
                onClick={() => setState("idle")}
              >
                <X size={18} />
              </button>
            ) : null}
            {state === "sending" ? (
              <Loader2 className="signup-modal__icon is-spinning" size={34} />
            ) : state === "error" ? (
              <AlertCircle className="signup-modal__icon is-error" size={34} />
            ) : (
              <CheckCircle2 className="signup-modal__icon" size={34} />
            )}
            <p className="signup-modal__eyebrow">
              {state === "sending"
                ? "先行登録を送信中です"
                : state === "error"
                  ? "送信できませんでした"
                  : "先行登録を受け付けました"}
            </p>
            <h3 id="signup-modal-title">
              {state === "sending"
                ? "先行登録を受け付けています。"
                : state === "error"
                  ? "送信に失敗しました。"
                  : "ご登録ありがとうございます。"}
            </h3>
            <p>
              {state === "sending"
                ? "数秒だけお待ちください。送信完了後、この画面で受付完了をお知らせします。"
                : state === "error"
                  ? message
                  : "先行30社限定スタータープランとして、3か月無料と永久半額価格のご案内をお送りします。準備が整い次第、ご入力いただいたメールアドレス宛にご連絡いたします。"}
            </p>
            {state !== "sending" ? (
              <button className="signup-modal__button" type="button" onClick={() => setState("idle")}>
                閉じる
              </button>
            ) : (
              <button className="signup-modal__button" type="button" disabled>
                送信中...
              </button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

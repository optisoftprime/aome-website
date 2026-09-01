"use client";

import { useState } from "react";
import { formspreeId } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = `https://formspree.io/f/${formspreeId}`;
const IS_CONFIGURED = /^[a-zA-Z0-9]+$/.test(formspreeId) && formspreeId !== "YOUR_FORM_ID";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!IS_CONFIGURED) {
      setStatus("error");
      setError("Not connected yet — add your Formspree form ID.");
      return;
    }

    setStatus("sending");
    setError(null);

    const data = new FormData(event.currentTarget);
    // Tells the two forms apart in the Formspree inbox
    data.set("_subject", "Newsletter subscription — AOME People Solutions");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        setEmail("");
        return;
      }

      const body = await res.json().catch(() => null);
      setStatus("error");
      setError(
        body?.errors?.map((e: { message: string }) => e.message).join(", ") ??
          "Something went wrong. Please try again.",
      );
    } catch {
      setStatus("error");
      setError("Could not reach the server. Please try again.");
    }
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <label htmlFor="subscribe-email" className="sr-only">
        Your email address
      </label>

      {/* Spam trap — real people never fill this in */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <input
        id="subscribe-email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="w-full rounded-md border border-white/25 bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/45 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-3 w-full rounded-md bg-gold px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Subscribing…" : "Subscribe"}
      </button>

      {status === "sent" && (
        <p aria-live="polite" className="mt-2 text-[12px] text-gold-soft">
          Thanks — you&apos;re on the list.
        </p>
      )}
      {status === "error" && error && (
        <p role="alert" className="mt-2 text-[12px] text-gold-soft">
          {error}
        </p>
      )}
    </form>
  );
}

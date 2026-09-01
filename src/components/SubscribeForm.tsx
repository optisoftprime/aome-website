"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-4"
      onSubmit={(event) => {
        event.preventDefault();
        // No backend yet — wire this up to the mailing-list provider.
        setDone(true);
        setEmail("");
      }}
    >
      <label htmlFor="subscribe-email" className="sr-only">
        Your email address
      </label>
      <input
        id="subscribe-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="w-full rounded-md border border-white/25 bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/45 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-md bg-gold px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-gold-dark"
      >
        Subscribe
      </button>
      {done && (
        <p aria-live="polite" className="mt-2 text-[12px] text-gold-soft">
          Thanks — we&apos;ll be in touch.
        </p>
      )}
    </form>
  );
}

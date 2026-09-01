"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { formspreeId } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Shared open/close state so any button on the page can raise the form */
/* ------------------------------------------------------------------ */

const ContactModalContext = createContext<{ open: () => void } | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      {isOpen && <ContactDialog onClose={close} />}
    </ContactModalContext.Provider>
  );
}

/** Button that opens the enquiry form. Styling is passed in by the caller. */
export function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* The dialog itself                                                    */
/* ------------------------------------------------------------------ */

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = `https://formspree.io/f/${formspreeId}`;
const IS_CONFIGURED = /^[a-zA-Z0-9]+$/.test(formspreeId) && formspreeId !== "YOUR_FORM_ID";

function ContactDialog({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  /* Close on Escape, keep the page behind from scrolling, and restore focus. */
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;

      // Simple focus trap so tabbing cannot leave the dialog
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, input, textarea, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!IS_CONFIGURED) {
      setStatus("error");
      setError(
        "This form is not connected yet — add your Formspree form ID to send messages.",
      );
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      const body = await res.json().catch(() => null);
      const message =
        body?.errors?.map((e: { message: string }) => e.message).join(", ") ??
        "Something went wrong. Please try again.";
      setStatus("error");
      setError(message);
    } catch {
      setStatus("error");
      setError("Could not reach the server. Check your connection and try again.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-ink/55 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative my-auto w-full max-w-[520px] rounded-2xl bg-white p-6 shadow-[0_30px_80px_-20px_rgba(16,64,31,0.45)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-mint hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h2 id={titleId} className="mt-5 text-[20px] font-semibold text-ink">
              Message sent
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Thank you for reaching out. A member of the AOME team will get back to you
              shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-md bg-gold px-7 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-gold-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="pr-10 text-[20px] font-semibold text-ink sm:text-[22px]">
              Let&apos;s Build a Stronger Workforce Together
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
              Tell us a little about your organization and we&apos;ll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
              {/* Spam trap — real people never fill this in */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <Field label="Full Name" htmlFor="cf-name">
                <input
                  ref={firstFieldRef}
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClass}
                />
              </Field>

              <Field label="Email Address" htmlFor="cf-email">
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Message" htmlFor="cf-message">
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className={`${inputClass} resize-y`}
                />
              </Field>

              {error && (
                <p role="alert" className="text-[13px] leading-relaxed text-[#b3261e]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-gold px-7 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

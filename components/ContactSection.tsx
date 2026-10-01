"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass = "contact-input";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-[1432px] px-4 pb-4">
      <div className="overflow-hidden rounded-[28px] bg-ink px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <FadeIn>
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/60">
            Get in Touch
          </p>
          <h2 className="mt-4 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.055em]">
            Let&apos;s work together
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block max-w-full py-2.5 [overflow-wrap:anywhere] text-[clamp(1.65rem,4.5vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white sm:mt-10"
          >
            {site.email}
          </a>
        </FadeIn>

        <div className="mt-16 grid gap-12 border-t border-white/20 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <FadeIn>
            <div>
              <span className="status-badge">
                <span className="status-dot" aria-hidden="true" />
                {site.availability}
              </span>
              <p className="mt-8 max-w-sm text-[15px] leading-7 text-white/60">
                Have a project in mind or want to talk shop? Send the details
                below and I&apos;ll get back to you as soon as I can.
              </p>
              <address className="mt-8 not-italic">
                <ul className="flex flex-wrap gap-3">
                  <li>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium transition-colors hover:border-white"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium transition-colors hover:border-white"
                    >
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project"
                className={inputClass}
              />
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <span aria-hidden="true">↗</span>}
              </button>
              {status === "success" && (
                <p role="status" className="text-sm text-white/80">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-white/80">
                  Error: {error}
                </p>
              )}
            </div>
          </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

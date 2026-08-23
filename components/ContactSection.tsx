"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-cyan-400";

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
    <section id="contact" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Have a project in mind or want to talk shop? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
          >
            Let&apos;s Talk
          </a>

          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-2xl space-y-5"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
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
                className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p role="status" className="text-sm text-cyan-300">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-zinc-200">
                  Error: {error}
                </p>
              )}
            </div>
          </form>

          <address className="mt-12 not-italic">
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub: ${site.githubLabel}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.githubLabel}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn: ${site.linkedinLabel}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.linkedinLabel}
                </a>
              </li>
            </ul>
          </address>
        </FadeIn>
      </div>
    </section>
  );
}

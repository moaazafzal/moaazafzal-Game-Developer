"use client";

import { useState } from "react";
import { FadeIn } from "@/components/Motion";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { profile, links, nav } from "@/lib/content";

// Static export means no server of our own, so the form posts to FormSubmit,
// which relays to the inbox below. Its first submission sends a one-off
// confirmation mail there; nothing is delivered until that link is clicked.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const field =
  "mt-2 w-full rounded-xl border border-chalk/20 bg-transparent px-4 py-3 text-chalk placeholder:text-chalk/30 outline-none focus:border-chalk/60 transition-colors";
const label = "text-[0.62rem] font-light uppercase tracking-[0.22em] text-chalk/45";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Reply-To the sender, so answering the notification reaches the client.
    data._replyto = data.email;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      // Never show success for a message that did not get through.
      setError(`Could not send. Email ${profile.email} directly.`);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-[1.6rem] border border-chalk/20 p-8 text-center">
        <p className="font-medium uppercase tracking-widest">Message sent</p>
        <p className="mt-3 font-light text-chalk/60 text-sm">
          Thanks for reaching out. I reply within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[1.6rem] border border-chalk/15 p-6 sm:p-8 space-y-5">
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* Honeypot: people leave it empty, bots fill it in. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={label}>Name</span>
          <input required name="name" type="text" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input required name="email" type="email" placeholder="you@studio.com" className={field} />
        </label>
      </div>
      <label className="block">
        <span className={label}>Project</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What are you building?"
          className={`${field} resize-none`}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-rose-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-chalk py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-ink hover:bg-white transition-colors disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="px-5 sm:px-8 md:px-10 pb-8 pt-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start rounded-[2rem] md:rounded-[3rem] border border-chalk/20 p-6 sm:p-9 md:p-12">
            <div>
              <h2 className="gradient-head font-black uppercase leading-[0.9] tracking-tight text-[clamp(2.25rem,6vw,4.5rem)]">
                Let&rsquo;s build
                <br />
                something
              </h2>
              <p className="mt-5 max-w-sm font-light leading-relaxed text-chalk/55 text-[0.95rem]">
                Open to game builds, prototypes, monetisation work and rescue jobs on
                projects that have stalled.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PillLink href={links.email} size="sm">
                  {profile.email} <ArrowIcon />
                </PillLink>
                <PillLink href={links.linkedin} tone="outline" size="sm" external>
                  LinkedIn
                </PillLink>
                <PillLink href={links.upwork} tone="outline" size="sm" external>
                  Upwork
                </PillLink>
                <PillLink href={links.fiverr} tone="outline" size="sm" external>
                  Fiverr
                </PillLink>
                <PillLink href={links.github} tone="outline" size="sm" external>
                  GitHub
                </PillLink>
                <PillLink href={links.play} tone="outline" size="sm" external>
                  Google Play
                </PillLink>
              </div>
            </div>
            <ContactForm />
          </div>
        </FadeIn>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-chalk/12 pt-7">
          <p className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-chalk/40">
            &copy; {year} {profile.name}
          </p>
          <nav className="flex gap-6">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-chalk/40 hover:text-chalk transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-chalk/40">
            {profile.role} &middot; {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

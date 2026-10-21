import { IconMail } from "@tabler/icons-react";
import type { FormEvent } from "react";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Contact — Iam Bennett" }];
}

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary";

export default function ContactRoute() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nName: ${name}\nReply to: ${email}`,
    );
    window.location.href = `mailto:hello@iambennett.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Let's talk
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Tell me a little about your project and I'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <IconMail size={16} />
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}

import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type Props = {
  children: ReactNode; // the trigger
};

export function BookCallDialog({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/samuelhowell247@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setSubmitted(false);
          setError(null);
        }
      }}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {submitted ? (
            <div className="py-6 text-center">
              <Dialog.Title className="text-xl font-semibold tracking-tight mb-2">
                Thanks, we'll be in touch.
              </Dialog.Title>
              <Dialog.Description className="text-muted-foreground text-sm leading-relaxed">
                We received your details and will reach out within one business day to book your free audit.
              </Dialog.Description>
              <button
                onClick={() => setOpen(false)}
                className="btn btn-sm btn-neutral rounded-full mt-6"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-xl sm:text-2xl font-semibold tracking-tight mb-1.5">
                Book your free audit
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Tell us a little about you. We'll reply within one business day.
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New audit request, BrightFlow AI" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <Field label="First name" name="first_name" type="text" required autoComplete="given-name" />
                <Field label="Business name" name="business_name" type="text" required autoComplete="organization" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />

                {error && (
                  <div className="text-sm text-destructive">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-neutral rounded-full w-full disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request my audit"}
                </button>
                <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                  No pitch. No pressure. Just a clear plan.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

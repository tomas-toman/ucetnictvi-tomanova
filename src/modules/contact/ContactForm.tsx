"use client";

import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import Check from "@/components/icons/Check";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useActionState, useState } from "react";
import { sendContactMessage } from "./actions";
import {
  ContactFormErrors,
  ContactFormState,
  HONEYPOT_FIELD,
  MAX_MESSAGE_LENGTH,
} from "./schema";
import Field, { errorProps, INPUT_STYLE } from "./Field";
import SubjectTypeField from "./SubjectTypeField";

const INITIAL_STATE: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    INITIAL_STATE,
  );
  const [messageLength, setMessageLength] = useState(0);

  const isSuccess = state.status === "success";
  const values = "values" in state ? state.values : undefined;
  const errors: ContactFormErrors =
    state.status === "invalid" ? state.errors : {};

  return (
    <div className="relative h-full">
      <form
        action={formAction}
        noValidate
        className={cn("relative flex flex-col gap-5", isSuccess && "invisible")}
      >
        <Field id="contact-name" label="Jméno a příjmení" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values?.name}
            className={INPUT_STYLE}
            {...errorProps("contact-name", errors.name)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="contact-email" label="E-mail" error={errors.email}>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={values?.email}
              className={INPUT_STYLE}
              {...errorProps("contact-email", errors.email)}
            />
          </Field>

          <Field
            id="contact-phone"
            label="Telefon"
            isOptional
            error={errors.phone}
          >
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={values?.phone}
              className={INPUT_STYLE}
              {...errorProps("contact-phone", errors.phone)}
            />
          </Field>
        </div>

        <SubjectTypeField
          defaultValue={values?.subjectType}
          error={errors.subjectType}
        />

        <Field
          id="contact-message"
          label="Zpráva"
          error={errors.message}
          aside={
            <span
              className={cn(
                "text-xs tabular-nums text-dim-gray",
                messageLength >= MAX_MESSAGE_LENGTH && "text-red-700",
              )}
            >
              {messageLength} / {MAX_MESSAGE_LENGTH}
            </span>
          }
        >
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={(event) =>
              setMessageLength(event.target.value.trim().length)
            }
            defaultValue={values?.message}
            className={`${INPUT_STYLE} resize-none`}
            {...errorProps("contact-message", errors.message)}
          />
        </Field>

        <div aria-hidden="true" className="absolute left-[-9999px] size-px">
          <input
            name={HONEYPOT_FIELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {state.status === "failed" && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800 motion-safe:animate-fade-in"
          >
            Zprávu se nepodařilo odeslat. Zkuste to prosím za chvíli znovu.
          </p>
        )}

        {state.status === "rate-limited" && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800 motion-safe:animate-fade-in"
          >
            Momentálně nelze odeslat další zprávu. Zkuste to prosím později,
            nebo mi zavolejte.
          </p>
        )}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-dim-gray">
            Vaše údaje použiji pouze k&nbsp;vyřízení vaší zprávy. Více v{" "}
            <Link
              href="/zasady-ochrany-osobnich-udaju"
              className="underline underline-offset-2 transition-colors hover:text-teal rounded-md"
            >
              zásadách ochrany osobních údajů
            </Link>
            .
          </p>
          <Button
            type="submit"
            isLoading={isPending}
            loadingText="Odesílám…"
            fullWidth="mobile"
            className="shrink-0 justify-center"
          >
            Odeslat zprávu
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </form>

      {isSuccess && <SuccessMessage />}
    </div>
  );
}

function SuccessMessage() {
  return (
    <div
      role="status"
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center motion-safe:animate-fade-in"
    >
      <span className="rounded-full bg-teal/15 p-4 motion-safe:animate-pop-in">
        <Check className="size-8 text-teal *:[stroke-dasharray:24] motion-safe:*:animate-draw" />
      </span>
      <h3 className="text-2xl font-medium text-charcoal">Děkuji za zprávu</h3>
      <p className="max-w-80 text-dim-gray">
        Ozvu se vám nejpozději následující pracovní den.
      </p>
    </div>
  );
}

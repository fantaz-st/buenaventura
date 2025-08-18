"use client";

import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import { sendInquiry } from "./actions";
import classes from "./Form.module.css";

const initialState = { status: "idle", errors: {}, message: "" };

export default function Form({ tourSlug }) {
  const [state, formAction, isPending] = useActionState(sendInquiry, initialState);
  const [subject, setSubject] = useState(tourSlug || "General");
  const firedRef = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !firedRef.current && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", { send_to: "AW-17322617143/fhd7CMSZ04gbELfSiMRA" });
      firedRef.current = true;
    }
  }, [state.status]);

  return (
    <form action={formAction} className={classes.form}>
      <input type="text" name="honey" className={classes.honeypot} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="sourceUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      {tourSlug && <input type="hidden" name="subject" value={tourSlug} />}

      <Field label="Full name *" name="name" error={state.errors?.name} />
      <Field label="Email *" name="email" type="email" error={state.errors?.email} />
      <Field label="Phone / WhatsApp" name="phone" />

      {!tourSlug && (
        <Select
          label="Subject *"
          name="subject"
          error={state.errors?.subject}
          options={["General", "Pricing", "Availability", "Tour Specific", "Boat Specific"]}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            firedRef.current = false;
          }}
        />
      )}

      {subject === "Availability" && (
        <>
          <Field label="Preferred date" name="date" type="date" error={state.errors?.date} />
          <Field label="Group size *" name="groupSize" type="number" min={1} error={state.errors?.groupSize} />
        </>
      )}

      <Textarea label="Message *" name="message" error={state.errors?.message} />

      <div className={classes.checkboxRow}>
        <input id="consent" type="checkbox" name="consent" aria-invalid={!!state.errors?.consent} />
        <label htmlFor="consent" className={classes.label}>
          I agree that you use my data to respond to this inquiry.
        </label>
      </div>
      {state.errors?.consent && <p className={classes.errorText}>{state.errors.consent}</p>}

      <button type="submit" className={classes.button} disabled={isPending || state.status === "success"} aria-busy={isPending ? true : undefined}>
        {state.status === "success" ? "Sent!" : "Send inquiry"}
      </button>

      {state.status === "success" && <p className={classes.successText}>{state.message}</p>}
      {state.status === "error" && state.message && <p className={classes.errorText}>{state.message}</p>}
    </form>
  );
}

function Field({ label, name, error, type = "text", ...rest }) {
  return (
    <div className={classes.field}>
      <label className={classes.label}>{label}</label>
      <input name={name} type={type} className={`${classes.input} ${error ? classes.inputError : ""}`} aria-invalid={!!error} {...rest} />
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
}

function Textarea({ label, name, error, ...rest }) {
  return (
    <div className={classes.field}>
      <label className={classes.label}>{label}</label>
      <textarea name={name} rows={4} className={`${classes.textarea} ${error ? classes.textareaError : ""}`} aria-invalid={!!error} {...rest} />
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
}

function Select({ label, name, options, error, value, onChange }) {
  return (
    <div className={classes.field}>
      <label className={classes.label}>{label}</label>
      <select name={name} value={value} onChange={onChange} className={`${classes.select} ${error ? classes.selectError : ""}`} aria-invalid={!!error}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
}

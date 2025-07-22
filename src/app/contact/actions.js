"use server";

import { sendMail } from "@/lib/email/sendMail";

export async function sendInquiry(prevState, formData) {
  const data = {
    name: (formData.get("name") || "").toString().trim(),
    email: (formData.get("email") || "").toString().trim(),
    phone: (formData.get("phone") || "").toString().trim(),
    subject: (formData.get("subject") || "General").toString().trim(),
    date: (formData.get("date") || "").toString(),
    groupSize: Number(formData.get("groupSize") || 0),
    message: (formData.get("message") || "").toString().trim(),
    consent: formData.get("consent"),
    honey: (formData.get("honey") || "").toString(),
    sourceUrl: (formData.get("sourceUrl") || "").toString(),
  };

  const errors = {};

  // Basic validation
  if (!data.name || data.name.length < 2) errors.name = "Enter your full name";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.email = "Invalid email";
  if (!data.subject) errors.subject = "Pick a subject";
  if (!data.message || data.message.length < 10) errors.message = "Min 10 characters";
  if (!data.consent) errors.consent = "Consent is required";
  if (data.honey) errors.honey = "Bot detected";

  // Conditional validation
  if (data.subject === "Availability") {
    if (!data.date) errors.date = "Pick a date";
    if (!data.groupSize || data.groupSize < 1) errors.groupSize = "Group size must be > 0";
  }

  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "Please fix the fields." };
  }

  try {
    // Admin email
    await sendMail({
      to: process.env.GMAIL_USER,
      subject: `New inquiry: ${data.subject} (${data.date || "no date"})`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "-"}</p>
        <p><b>Subject:</b> ${data.subject}</p>
        <p><b>Date:</b> ${data.date || "Not specified"}</p>
        <p><b>Group size:</b> ${data.groupSize || "-"}</p>
        <p><b>Message:</b><br/>${data.message.replace(/\n/g, "<br/>")}</p>
        <p><b>Source URL:</b> ${data.sourceUrl || "-"}</p>
        <p><small>Consent: yes</small></p>
      `,
    });

    // Auto-reply
    await sendMail({
      to: data.email,
      subject: "We got your inquiry – Rebelde Boats",
      html: `<p>Hi ${data.name},</p>
             <p>Thanks for reaching out (${data.subject}). We'll reply within 24 hours.</p>
             <p>— Rebelde Boats</p>`,
    });

    return { status: "success", errors: {}, message: "Thanks! We'll reply soon." };
  } catch (err) {
    console.error(err);
    return {
      status: "error",
      errors: {},
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}

import nodemailer from "nodemailer";

// Gmail SMTP. Requires an App Password on the sender account:
// Google Account -> Security -> 2-Step Verification -> App passwords
const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_TO = process.env.MAIL_TO;
const MAIL_APP_PASSWORD = process.env.MAIL_APP_PASSWORD;

export function isMailConfigured(): boolean {
  return Boolean(MAIL_FROM && MAIL_TO && MAIL_APP_PASSWORD);
}

export interface ContactMailInput {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
}

export async function sendContactMail(input: ContactMailInput) {
  if (!isMailConfigured()) {
    return { success: false, error: "Mail service not configured" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: MAIL_FROM, pass: MAIL_APP_PASSWORD },
  });

  const subject = `New website enquiry${input.subject ? `: ${input.subject}` : ""} - ${input.name}`;

  const text = [
    "New contact form submission",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: +91 ${input.phone}`,
    `Company: ${input.company || "-"}`,
    `Subject: ${input.subject || "-"}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Nishu Enterprises Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: input.email,
      subject,
      text,
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

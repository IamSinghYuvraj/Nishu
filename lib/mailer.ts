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
  /** Which system the enquiry is for. */
  product?: string;
  /** Output requirement, normally litres per hour. */
  capacity?: string;
  /** Where the plant will be installed. */
  city?: string;
  subject?: string;
  message: string;
  /** Site drawing or specification, capped client-side at 4 MB. */
  attachment?: File;
}

export async function sendContactMail(input: ContactMailInput) {
  if (!isMailConfigured()) {
    return { success: false, error: "Mail service not configured" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: MAIL_FROM, pass: MAIL_APP_PASSWORD },
  });

  // Lead the subject line with the system and capacity so the enquiry can be
  // triaged from the inbox list without opening it.
  const qualifier = [input.product, input.capacity].filter(Boolean).join(" ");
  const subject = `New enquiry${qualifier ? `: ${qualifier}` : ""} - ${input.name}`;

  const text = [
    "New contact form submission",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: +91 ${input.phone}`,
    `Company: ${input.company || "-"}`,
    "",
    `System required: ${input.product || "-"}`,
    `Capacity: ${input.capacity || "-"}`,
    `Site location: ${input.city || "-"}`,
    `Subject: ${input.subject || "-"}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const attachments = [];
  if (input.attachment) {
    attachments.push({
      filename: input.attachment.name,
      content: Buffer.from(await input.attachment.arrayBuffer()),
      contentType: input.attachment.type || "application/octet-stream",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Nishu Enterprises Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: input.email,
      subject,
      text,
      ...(attachments.length ? { attachments } : {}),
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

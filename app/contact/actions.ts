'use server';

import greenApiClient from '@/lib/greenApi';
import { sendContactMail, type ContactMailInput } from '@/lib/mailer';

export async function sendContactMessage(input: ContactMailInput) {
  // Primary channel: email
  const mail = await sendContactMail(input);

  // Secondary channel: WhatsApp via Green API (best-effort, only if configured)
  const phoneNumber = process.env.BUSINESS_WHATSAPP_1;
  let whatsappOk = false;
  if (phoneNumber) {
    try {
      const body = `New Contact Form Submission:\nName: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone}\nCompany: ${input.company || '-'}\nSubject: ${input.subject || '-'}\nMessage: ${input.message}`;
      const wa = await greenApiClient.sendMessage(phoneNumber, body);
      whatsappOk = Boolean(wa?.success);
    } catch {
      whatsappOk = false;
    }
  }

  if (mail.success || whatsappOk) {
    return { success: true };
  }
  return { success: false, error: mail.error || 'Failed to send message' };
}

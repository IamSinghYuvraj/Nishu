'use server';

import greenApiClient from '@/lib/greenApi';

export async function sendContactMessage(messageBody: string) {
  try {
    // Use BUSINESS_WHATSAPP_1 from environment variables
    const phoneNumber = process.env.BUSINESS_WHATSAPP_1;
    
    if (!phoneNumber) {
      return {
        success: false,
        error: 'Business WhatsApp number not configured',
      };
    }

    const result = await greenApiClient.sendMessage(phoneNumber, messageBody);
    return result;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send message',
    };
  }
}

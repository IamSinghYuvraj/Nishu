// Thin wrapper over gtag. No-ops until NEXT_PUBLIC_GA_ID is configured,
// so it is safe to call from anywhere.
type Gtag = (command: string, event: string, params?: Record<string, unknown>) => void;

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", event, params);
}

// Fired for every lead-generating action so Google Ads can optimise on it.
export function trackLead(source: "form" | "whatsapp" | "phone" | "email", extra: Record<string, unknown> = {}) {
  track("generate_lead", {
    lead_source: source,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...extra,
  });
}

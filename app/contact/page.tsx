"use client";

import { useRef, useState } from "react";
import AnimatedSection from "@/components/animation";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  CheckCircle,
  X,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Paperclip,
  AlertCircle,
  Send,
} from "lucide-react";
import { sendContactMessage } from "@/app/contact/actions";
import { FAQS, BUSINESS, PRODUCTS } from "@/lib/site";
import { trackLead } from "@/lib/track";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  /** Which system they need - drives routing and the quotation. */
  product: string;
  /** Output requirement, normally litres per hour. */
  capacity: string;
  /** Where the plant will be installed. */
  city: string;
  subject: string;
  message: string;
}

type TouchedState = Record<keyof FormData, boolean>;

/** Fields that are collected but not required to submit. */
const OPTIONAL_FIELDS: (keyof FormData)[] = [
  "company",
  "capacity",
  "city",
  "subject",
];

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  capacity: "",
  city: "",
  subject: "",
  message: "",
};

const UNTOUCHED: TouchedState = {
  name: false,
  email: false,
  phone: false,
  company: false,
  product: false,
  capacity: false,
  city: false,
  subject: false,
  message: false,
};

const ALL_TOUCHED: TouchedState = {
  name: true,
  email: true,
  phone: true,
  company: true,
  product: true,
  capacity: true,
  city: true,
  subject: true,
  message: true,
};

// Vercel caps a serverless request body at ~4.5 MB, so keep the attachment
// comfortably under it. Matches serverActions.bodySizeLimit in next.config.mjs.
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const ACCEPTED_ATTACHMENTS =
  ".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx,.dwg,.dxf";

interface Notification {
  type: "success" | "error" | "warning";
  message: string;
  show: boolean;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notification, setNotification] = useState<Notification>({
    type: "success",
    message: "",
    show: false,
  });
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [touched, setTouched] = useState<TouchedState>(UNTOUCHED);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachmentError, setAttachmentError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nishudbj@gmail.com",
      link: "mailto:nishudbj@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value:
        BUSINESS.addressLine,
      link: "#",
    },
  ];

  const handleBlur = (field: keyof TouchedState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const id = (target.id || target.name) as keyof FormData;
    if (!id) return;
    const value = target.value;

    if (id === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [id]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }

    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() !== "" &&
      emailRegex.test(formData.email.trim()) &&
      formData.phone.replace(/\D/g, "").length === 10 &&
      formData.product.trim() !== "" &&
      formData.message.trim() !== "" &&
      attachmentError === ""
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setAttachment(null);
      setAttachmentError("");
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setAttachment(null);
      setAttachmentError(
        `That file is ${(file.size / 1024 / 1024).toFixed(1)} MB. Please keep it under 4 MB, or email it to us directly.`
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setAttachment(file);
    setAttachmentError("");
  };

  const clearAttachment = () => {
    setAttachment(null);
    setAttachmentError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const showNotification = (type: Notification["type"], message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 8000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(ALL_TOUCHED);

    if (!validateForm()) {
      showNotification("error", "Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const greenApiResult = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.replace(/\D/g, ""),
        company: formData.company.trim(),
        product: formData.product.trim(),
        capacity: formData.capacity.trim(),
        city: formData.city.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        attachment: attachment ?? undefined,
      });

      const delivered =
        !greenApiResult ||
        typeof greenApiResult !== "object" ||
        !("success" in greenApiResult) ||
        greenApiResult.success;

      if (!delivered) {
        // Neither email nor WhatsApp accepted the enquiry. Do not clear the
        // form and do not count a conversion - the message reached nobody, and
        // telling the buyer otherwise loses the lead silently.
        console.error("Contact form delivery failed:", greenApiResult.error);
        showNotification(
          "error",
          `We couldn't send your enquiry just now. Please call us on ${BUSINESS.phone} or WhatsApp us, and your details below have been kept so you can try again.`
        );
        return;
      }

      // Lead conversion: only once we know a channel actually accepted it.
      trackLead("form", { product: formData.product.trim() || undefined });

      showNotification(
        "success",
        "Your query has been sent successfully! We'll contact you shortly."
      );

      setFormData(EMPTY_FORM);
      setTouched(UNTOUCHED);
      clearAttachment();
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again or contact us directly.";
      showNotification("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (field: keyof FormData): string => {
    const baseClass =
      "w-full px-4 py-2 rounded-lg border bg-white text-foreground placeholder:text-muted-foreground/80 transition-all duration-300 hover:border-primary/40 focus:ring-4 focus:ring-primary/15 focus:border-primary";
    const isFieldTouched = touched[field as keyof TouchedState];
    let isFieldInvalid = false;

    if (isFieldTouched) {
      if (field === "phone") {
        isFieldInvalid = formData.phone.replace(/\D/g, "").length !== 10;
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isFieldInvalid = !emailRegex.test(formData.email.trim());
      } else if (OPTIONAL_FIELDS.includes(field)) {
        isFieldInvalid = false;
      } else {
        isFieldInvalid = !(formData[field] as string).trim();
      }
    }

    const errorClass = isFieldInvalid ? "border-red-500 ring-red-500/20" : "border-border";
    return `${baseClass} ${errorClass}`;
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "success":
        return <CheckCircle className="mr-3 h-5 w-5 animate-bounce" />;
      case "warning":
        return <AlertCircle className="mr-3 h-5 w-5 animate-pulse" />;
      default:
        return <X className="mr-3 h-5 w-5 animate-pulse" />;
    }
  };

  const getNotificationColors = () => {
    switch (notification.type) {
      case "success":
        return "bg-green-500 text-white shadow-green-500/30";
      case "warning":
        return "bg-yellow-500 text-white shadow-yellow-500/30";
      default:
        return "bg-red-500 text-white shadow-red-500/30";
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-2xl flex items-center max-w-md animate-in slide-in-from-right-4 duration-500 ${getNotificationColors()}`}
        >
          {getNotificationIcon()}
          <span className="grow text-sm font-medium">{notification.message}</span>
          <button
            onClick={closeNotification}
            className="ml-4 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:scale-110 hover:rotate-90"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <main className="flex-1">
        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Contact · Vasai East, Mumbai</p>
            <h1 className="mt-4 text-4xl md:text-6xl text-balance mb-6 text-foreground">
              Request a <span className="text-lime">Quotation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tell us what you need - an RO plant, DM plant, water softener or a complete
              mineral water project - and we will size it against your water before quoting.
              Designing and building water treatment plants since {BUSINESS.foundingYear}.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackLead("phone")}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-bright/60 hover:bg-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-lime transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Phone</span>
                  <span className="mt-1 block text-lg font-semibold text-foreground">{BUSINESS.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                onClick={() => trackLead("email")}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-bright/60 hover:bg-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-lime transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Email</span>
                  <span className="mt-1 block truncate text-lg font-semibold text-foreground">{BUSINESS.email}</span>
                </span>
              </a>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-bright/60 hover:bg-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-lime transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Address</span>
                  <address className="mt-1 block text-sm not-italic leading-relaxed text-foreground">{BUSINESS.addressLine}</address>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
            <AnimatedSection>
              <Card className="w-full gap-0 rounded-2xl border border-border bg-white p-6 shadow-xl shadow-ink/5 sm:p-10">
                <p className="eyebrow">Enquiry form</p>
                <h2 className="mt-3 text-3xl text-foreground mb-2">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("name")}
                        required
                        className={getInputClassName("name")}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("email")}
                        required
                        className={getInputClassName("email")}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="phone" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                      Phone (10 digits) *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("phone")}
                      required
                      placeholder="Enter 10-digit phone number"
                      className={getInputClassName("phone")}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2 group">
                      <Label htmlFor="company" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("company")}
                        className={getInputClassName("company")}
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="city" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        Site location
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("city")}
                        className={getInputClassName("city")}
                        placeholder="City where the plant will be installed"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2 group">
                      <Label htmlFor="product" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        System required *
                      </Label>
                      <select
                        id="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("product")}
                        required
                        className={`h-10 ${getInputClassName("product")}`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a system…</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.slug} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="capacity" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                        Required capacity
                      </Label>
                      <Input
                        id="capacity"
                        type="text"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("capacity")}
                        className={getInputClassName("capacity")}
                        placeholder="e.g. 5000 LPH"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-sm font-semibold group-focus-within:text-primary transition-colors">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("message")}
                      required
                      className={`min-h-[150px] resize-none ${getInputClassName("message")}`}
                      placeholder="Feed water source and analysis if you have one, daily requirement, and anything else that affects the design."
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachment" className="text-sm font-semibold">
                      Site drawing or specification
                    </Label>
                    <input
                      ref={fileInputRef}
                      id="attachment"
                      type="file"
                      accept={ACCEPTED_ATTACHMENTS}
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary hover:file:text-white file:transition-colors file:cursor-pointer cursor-pointer rounded-lg border border-dashed border-border bg-mist p-2 transition-colors hover:border-primary/50"
                    />
                    {attachment && (
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Paperclip className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate">{attachment.name}</span>
                        <span className="shrink-0">
                          ({(attachment.size / 1024).toFixed(0)} KB)
                        </span>
                        <button
                          type="button"
                          onClick={clearAttachment}
                          className="shrink-0 text-primary hover:underline"
                        >
                          Remove
                        </button>
                      </p>
                    )}
                    {attachmentError ? (
                      <p className="text-sm text-red-600">{attachmentError}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Optional. PDF, image, Office or CAD file, up to 4 MB.
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="group w-full disabled:cursor-not-allowed"
                    disabled={isSubmitting || !validateForm()}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-3 text-sm font-medium text-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    We&apos;ll respond to your message within 24 hours
                  </p>
                </form>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="flex h-full flex-col gap-6">
                <div className="on-dark page-hero no-wave rounded-2xl p-8">
                  <p className="eyebrow">For an accurate quote</p>
                  <h2 className="mt-3 text-2xl text-foreground">What to send us</h2>
                  <ul className="mt-6 space-y-4">
                    {[
                      ["Water source", "Borewell, municipal, tanker, river or seawater."],
                      ["Water analysis", "A lab report with TDS, hardness and turbidity, if you have one."],
                      ["Daily demand", "Litres per hour or per day, and the hours the plant runs."],
                      ["End use", "Drinking, bottling, boiler feed, pharma or process water."],
                    ].map(([title, text]) => (
                      <li key={title} className="flex gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                        <span>
                          <span className="block font-semibold text-foreground">{title}</span>
                          <span className="text-sm text-muted-foreground">{text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-h-[320px] flex-1 overflow-hidden rounded-2xl border border-border shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8948818652284!2d72.8611239!3d19.4169473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9811b5a8405%3A0x8d1f9ec7ec39b6c6!2sNISHU%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1762612705634!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 320 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nishu Enterprises Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-border bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={faq.question}
                  open={i === 0}
                  className="group rounded-xl border border-border bg-mist transition-all duration-300 hover:border-primary/40 open:border-primary/40 open:bg-white open:shadow-lg open:shadow-ink/5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {faq.question}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-5 pb-6 leading-relaxed text-muted-foreground md:px-6">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

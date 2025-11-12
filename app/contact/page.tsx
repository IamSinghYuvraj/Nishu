"use client";

import { useState } from "react";
import AnimatedSection from "@/components/animation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  X,
  Loader2,
  Mail,
  MapPin,
  Phone,
  AlertCircle,
  Send,
} from "lucide-react";
import { sendContactMessage } from "@/app/contact/actions";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface TouchedState {
  name: boolean;
  email: boolean;
  phone: boolean;
  company: boolean;
  subject: boolean;
  message: boolean;
}

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    email: false,
    phone: false,
    company: false,
    subject: false,
    message: false,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nishudbj@gmail.com",
      link: "mailto:nishudbj@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9820142424",
      link: "tel:+919820142424",
    },
    {
      icon: MapPin,
      label: "Address",
      value:
        "Gala No.5, Bld. No.6, Parsawanath Ind. Est., Vasai East, Vasai - 401208, Maharashtra, India",
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
      formData.message.trim() !== ""
    );
  };

  const showNotification = (type: Notification["type"], message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 8000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      subject: true,
      message: true,
    });

    if (!validateForm()) {
      showNotification("error", "Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const messageBody = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      const greenApiResult = await sendContactMessage(messageBody);

      if (
        greenApiResult &&
        typeof greenApiResult === "object" &&
        "success" in greenApiResult
      ) {
        if (greenApiResult.success) {
          showNotification(
            "success",
            "Your query has been sent successfully! We'll contact you shortly."
          );
        } else {
          console.error("Green API Error:", greenApiResult.error);
          showNotification(
            "warning",
            "Message received! We'll get back to you as soon as possible."
          );
        }
      } else {
        showNotification("success", "Thank you! We'll get back to you soon.");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        company: false,
        subject: false,
        message: false,
      });
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
      "w-full px-4 py-2 rounded-lg border bg-background text-foreground placeholder-muted-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02]";
    const isFieldTouched = touched[field as keyof TouchedState];
    let isFieldInvalid = false;

    if (isFieldTouched) {
      if (field === "phone") {
        isFieldInvalid = formData.phone.replace(/\D/g, "").length !== 10;
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isFieldInvalid = !emailRegex.test(formData.email.trim());
      } else if (field === "company" || field === "subject") {
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
        <AnimatedSection>
          <section className="bg-linear-to-br from-primary/5 to-secondary/5 border-b border-border py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Have questions about our water treatment solutions? Our team is ready to help. Contact us today for a consultation.
              </p>
            </div>
          </section>
        </AnimatedSection>


        <AnimatedSection>
          <section className="py-16 flex justify-center items-center bg-linear-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="grid gap-8 lg:grid-cols-3 mb-16">
                <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-100 hover:bg-white/95">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Address</h3>
                      <address className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors not-italic">
                        Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada, Waliv Village. Vasai East, Vasai - 401208, Maharashtra, India.
                      </address>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-200 hover:bg-white/95">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Phone className="h-6 w-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+919820142424" className="hover:text-primary transition-all duration-200 hover:underline hover:scale-105 inline-block">
                          +91 9820142424
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-300 hover:bg-white/95">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Mail className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="mailto:nishudbj@gmail.com" className="hover:text-primary transition-all duration-200 hover:underline hover:scale-105 inline-block">
                          nishudbj@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative group">
                {/* Animated backglow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-2xl bg-linear-to-br from-primary/20 via-primary/10 to-transparent pointer-events-none"></div>
                
                <div className="relative grid gap-8 lg:grid-cols-2 transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <Card className="mx-auto w-full max-w-2xl p-8 border-2 border-dashed border-primary/20 shadow-2xl shadow-primary/10 bg-white/90 backdrop-blur-sm animate-in slide-in-from-left-4 duration-700 delay-400 transition-all ring-1 ring-primary/5 relative group/form hover:border-primary/40 hover:shadow-3xl hover:shadow-primary/20 hover:bg-white/95">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-lg pointer-events-none"></div>
                  <div className="absolute inset-0 opacity-0 group-hover/form:opacity-10 transition-opacity duration-700 rounded-lg pointer-events-none" style={{backgroundImage: 'linear-gradient(90deg, var(--color-primary) 1px, transparent 1px), linear-gradient(0deg, var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                  <div className="relative">
                    <h2 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Get in Touch
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 group">
                          <Label htmlFor="name" className="text-sm font-medium group-focus-within:text-primary transition-colors">
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
                          <Label htmlFor="email" className="text-sm font-medium group-focus-within:text-primary transition-colors">
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
                        <Label htmlFor="phone" className="text-sm font-medium group-focus-within:text-primary transition-colors">
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

                      <div className="space-y-2 group">
                        <Label htmlFor="message" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("message")}
                          required
                          className={`min-h-[150px] resize-none ${getInputClassName("message")}`}
                          placeholder="Tell us about your inquiry..."
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        disabled={isSubmitting || !validateForm()}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            <span className="animate-pulse">Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            <span className="group-hover:animate-pulse">Send Message</span>
                          </>
                        )}
                      </Button>

                      <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-center text-blue-700 text-sm">
                          <Mail className="h-4 w-4 mr-2" />
                          We'll respond to your message within 24 hours
                        </div>
                      </div>
                    </form>
                  </div>
                </Card>

                <div className="h-[600px] w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/10 animate-in slide-in-from-right-4 duration-700 delay-500 hover:shadow-3xl hover:shadow-primary/20 transition-all ring-1 ring-primary/5 hover:ring-primary/10">
                  <div className="h-full w-full transition-transform duration-500 hover:scale-[1.01]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8948818652284!2d72.8611239!3d19.4169473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9811b5a8405%3A0x8d1f9ec7ec39b6c6!2sNISHU%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1762612705634!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                      title="Nishu Enterprises Location"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-primary/5 py-16 md:py-24 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">How long is the installation process?</h3>
                  <p className="text-sm text-muted-foreground">
                    Installation timelines vary based on system complexity and site conditions, typically ranging from 2-8 weeks.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Do you offer maintenance services?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide comprehensive maintenance and support packages to ensure optimal system performance.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">What warranty do you provide?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our systems come with a 5-10 year warranty covering parts and labor for manufacturing defects.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Can you customize solutions for my needs?</h3>
                  <p className="text-sm text-muted-foreground">
                    We specialize in tailored solutions designed specifically for your requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

    </div>
  );
}

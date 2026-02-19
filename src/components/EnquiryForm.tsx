"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const serviceOptions = [
  { value: "", label: "What are you interested in?" },
  { value: "quick-look", label: "Quick Look (mini-audit)" },
  { value: "health-check", label: "Health Check (full audit + fix)" },
  { value: "ground-up", label: "Ground Up (full setup)" },
  { value: "ongoing", label: "Ongoing management" },
  { value: "not-sure", label: "Not sure yet — help me figure it out" },
];

const findUsOptions = [
  { value: "", label: "How did you find us?" },
  { value: "google", label: "Google search" },
  { value: "referral", label: "Referral from someone" },
  { value: "social", label: "Social media" },
  { value: "klaviyo", label: "Klaviyo community" },
  { value: "other", label: "Other" },
];

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [findUs, setFindUs] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = serviceOptions.find((o) => o.value === serviceParam);
      if (match) setService(serviceParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For v1, just show confirmation. Can be upgraded to send email later.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[20px] bg-warm-white p-8 text-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:p-12">
        <h2 className="mb-4 text-2xl font-bold text-forest">
          Thanks — we&apos;ll be in touch soon 🌱
        </h2>
        <p className="mb-6 text-charcoal">
          We&apos;ve received your enquiry and we&apos;ll get back to you within 1–2 business
          days. In the meantime, feel free to take our free Klaviyo scorecard to see how
          your email setup stacks up.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-colors duration-200 hover:text-terracotta/80"
        >
          Take the scorecard →
        </a>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-[12px] border border-sage/30 bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey/70 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Service selector */}
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className={`${inputClasses} cursor-pointer pr-10`}
        required
      >
        {serviceOptions.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Name & Email side by side on desktop */}
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          required
        />
        <input
          type="email"
          placeholder="you@yourbrand.com.au"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          required
        />
      </div>

      {/* Website */}
      <input
        type="url"
        placeholder="yourbrand.com.au"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className={inputClasses}
      />

      {/* Message */}
      <textarea
        placeholder="What do you sell, how long have you been running, and what's your current email setup like? Don't overthink it — a few sentences is great."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputClasses} min-h-[160px] resize-y`}
        rows={6}
      />

      {/* How did you find us */}
      <select
        value={findUs}
        onChange={(e) => setFindUs(e.target.value)}
        className={`${inputClasses} cursor-pointer pr-10`}
      >
        {findUsOptions.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[14px] bg-forest px-8 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-forest/90 hover:shadow-[0_4px_12px_rgba(45,106,79,0.3)]"
        >
          Send enquiry →
        </button>
      </div>
    </form>
  );
}

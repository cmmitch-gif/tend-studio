import Image from "next/image";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Enquire — Tend Studio",
  description:
    "Get in touch with Tend Studio. Tell us about your brand and we'll get back to you within 1–2 business days.",
};

export default function EnquirePage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-cream px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-12 md:flex-row md:items-center md:gap-16">
          {/* Text — left */}
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold text-forest md:text-5xl">
              Let&apos;s chat
            </h1>
            <p className="max-w-md text-base leading-relaxed text-charcoal">
              Tell us a bit about your brand and what you&apos;re looking for. We&apos;ll get back
              to you within 1–2 business days.
            </p>
          </div>

          {/* Illustration — right */}
          <div className="flex flex-1 justify-center md:justify-end">
            <Image
              src="/illustrations/closer-look.svg"
              alt="Two people communicating via screens"
              width={360}
              height={280}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="bg-cream px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-2xl">
          <Suspense fallback={<div className="h-[500px]" />}>
            <EnquiryForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

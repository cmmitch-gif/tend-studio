import Image from "next/image";
import Link from "next/link";
import BrandBar from "@/components/BrandBar";
import HowItWorksStep from "@/components/HowItWorksStep";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-cream px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
          {/* Text — left aligned */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium text-terracotta">
              Email &amp; CRM by design
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-forest md:text-5xl lg:text-[3.25rem]">
              Email that keeps your customers coming back
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-charcoal">
              Klaviyo email and SMS for Australian ecommerce brands. We build lasting
              customer relationships — not promo blasts and discount codes, but emails
              people actually want to receive.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[14px] bg-forest px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-forest/90 hover:shadow-[0_4px_12px_rgba(45,106,79,0.3)]"
            >
              See how we can help →
            </Link>
          </div>

          {/* Illustration — right */}
          <div className="flex flex-1 justify-center">
            <Image
              src="/illustrations/Hero-email-board.svg"
              alt="Person organising email content on a board"
              width={520}
              height={400}
              className="w-full max-w-md rounded-[16px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== BRAND BAR ===== */}
      <BrandBar />

      {/* ===== WHAT WE DO ===== */}
      <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-forest md:text-4xl">
            What we do
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 — Audits */}
            <div className="rounded-[20px] bg-warm-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:p-8">
              <p className="mb-4 text-lg font-semibold text-charcoal">
                🔍 Audits &amp; health checks
              </p>
              <div className="mb-5 flex justify-center">
                <Image
                  src="/illustrations/Health-check.svg"
                  alt="Audits and health checks"
                  width={180}
                  height={140}
                  className="h-[140px] w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-charcoal">
                We take a close look at your Klaviyo account and show you exactly
                what&apos;s working, what&apos;s not, and where the biggest opportunities are.
              </p>
            </div>

            {/* Card 2 — Setup */}
            <div className="rounded-[20px] bg-warm-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:p-8">
              <p className="mb-4 text-lg font-semibold text-charcoal">
                🛠️ Setup &amp; builds
              </p>
              <div className="mb-5 flex justify-center">
                <Image
                  src="/illustrations/Setup-builds.svg"
                  alt="Setup and builds"
                  width={180}
                  height={140}
                  className="h-[140px] w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-charcoal">
                From welcome flows to abandoned carts, we build your full Klaviyo email
                program from the ground up — designed around your brand and your customers.
              </p>
            </div>

            {/* Card 3 — Ongoing */}
            <div className="rounded-[20px] bg-warm-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:p-8">
              <p className="mb-4 text-lg font-semibold text-charcoal">
                🌱 Ongoing management
              </p>
              <div className="mb-5 flex justify-center">
                <Image
                  src="/illustrations/Ongoing-management.svg"
                  alt="Ongoing management"
                  width={180}
                  height={140}
                  className="h-[140px] w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-charcoal">
                We look after your email marketing month to month. Campaigns, flows,
                reporting, and strategy — so you can focus on running your business.
              </p>
            </div>
          </div>

          {/* Micro CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-forest transition-colors duration-200 hover:text-forest/80"
            >
              See our packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR BRANDS THAT THINK LONG-TERM ===== */}
      <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 rounded-[20px] bg-warm-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:flex-row md:gap-16 md:p-12">
          {/* Text — left */}
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold text-forest md:text-4xl">
              Built for brands that think long-term
            </h2>
            <p className="mb-4 text-base leading-relaxed text-charcoal">
              <strong>Some agencies chase short-term revenue</strong> with endless discount
              codes and flash sales. That&apos;s not us.
            </p>
            <p className="mb-4 text-base leading-relaxed text-charcoal">
              Tend Studio is for brands that care about the customer relationship — the
              kind that want people to come back because they love the brand, not because
              there&apos;s 20% off.
            </p>
            <p className="text-base leading-relaxed text-charcoal">
              We focus on lifetime value, not just the next sale. That means welcome
              experiences that feel personal, post-purchase emails that build loyalty, and
              campaigns that sound like your brand — because that&apos;s what actually grows a
              business over time.
            </p>
          </div>

          {/* Illustration — right */}
          <div className="flex flex-1 justify-center">
            <Image
              src="/illustrations/Built-for-brands-that-think.svg"
              alt="Plant ladder showing growth stages"
              width={400}
              height={350}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-forest md:text-4xl">
            How it works
          </h2>

          {/* Zigzag layout on desktop, stack on mobile */}
          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-0">
            <HowItWorksStep
              stepNumber={1}
              emoji="📋"
              title="Take the free scorecard"
              description="Answer a few quick questions about your email setup. You'll get an instant score showing where you stand and where the biggest opportunities are."
              illustration="/illustrations/scorecard.svg"
            />
            <HowItWorksStep
              stepNumber={2}
              emoji="🔍"
              title="Get a closer look"
              description="Book a mini-audit and we'll review your Klaviyo account in detail. You'll get a clear report with specific recommendations — no jargon, no fluff."
              illustration="/illustrations/closer-look.svg"
            />
            <HowItWorksStep
              stepNumber={3}
              emoji="🛠️"
              title="We build or fix"
              description="Whether it's setting up Klaviyo from scratch or optimising what you've got, we do the hands-on work to get your email program running properly."
              illustration="/illustrations/build-or-fix.svg"
            />
            <HowItWorksStep
              stepNumber={4}
              emoji="🌱"
              title="We tend to it"
              description="Ongoing management, campaigns, and strategy. We look after your email so you don't have to — and we keep improving it month after month."
              illustration="/illustrations/we-tend-to-it.svg"
            />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          {/* Illustration — left on cream background */}
          <div className="flex flex-1 justify-center">
            <Image
              src="/illustrations/ready-to-get-more.svg"
              alt="Ready to get more from your email"
              width={360}
              height={280}
              className="w-full max-w-sm"
            />
          </div>

          {/* Green card — right */}
          <div className="flex-1 rounded-[20px] bg-forest px-8 py-12 md:px-12 md:py-16">
            <h2 className="mb-5 text-3xl font-bold text-cream md:text-4xl">
              Ready to get more from your email?
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-cream/90">
              Whether you&apos;re starting from scratch or want to make what you&apos;ve got work
              harder — we&apos;d love to help.
            </p>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-[14px] bg-terracotta px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-[#b5604a] hover:shadow-[0_4px_12px_rgba(200,112,90,0.35)] hover:-translate-y-0.5"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services & Pricing — Tend Studio",
  description:
    "Klaviyo email marketing packages for Australian ecommerce brands. Audits, full setups, and ongoing management — with clear, upfront pricing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-cream px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-forest md:text-5xl">
            Services and pricing
          </h1>
        </div>
      </section>

      {/* ===== ONE-TIME PROJECTS ===== */}
      <section className="bg-cream px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-charcoal md:text-3xl">
            One time projects
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Quick Look"
              illustration="/illustrations/Quick-look.svg"
              oneLiner="A fast, expert review of your Klaviyo account."
              items={[
                "Surface-level review of your flows, segments, and deliverability",
                "Traffic-light report showing what's working and what needs attention",
                "Top 3 priority recommendations",
                "Quick wins you can action straight away",
                "Clear next steps",
              ]}
              price="$249"
              enquireLink="/enquire?service=quick-look"
            />

            <ServiceCard
              title="Health Check"
              illustration="/illustrations/Health-check.svg"
              oneLiner="A deep audit of your Klaviyo account — plus we fix what we find."
              items={[
                "Full audit across flows, segments, deliverability, forms, and revenue tracking",
                "Detailed report with benchmarks and recommendations",
                "Hands-on fixes for deliverability issues, broken flows, and quick wins",
                "Segment cleanup and optimisation",
                "1-hour strategy call to walk through findings",
              ]}
              price="$990"
              enquireLink="/enquire?service=health-check"
            />

            <ServiceCard
              title="Ground Up"
              illustration="/illustrations/ground-up.svg"
              oneLiner="A complete Klaviyo email program, built from scratch for your brand."
              items={[
                "Full Klaviyo setup (or rebuild) tailored to your brand",
                "Core automated flows: welcome series, abandoned cart, browse abandonment, post-purchase, and winback",
                "Email template design using your brand assets",
                "Segmentation strategy and setup",
                "Signup form design and integration",
                "Deliverability setup (domain authentication, warming plan)",
                "Handover session with documentation",
              ]}
              price="$2,200"
              enquireLink="/enquire?service=ground-up"
            />
          </div>
        </div>
      </section>

      {/* ===== ONGOING MANAGEMENT ===== */}
      <section className="bg-cream px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-charcoal md:text-3xl">
            On-going management
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Sprout"
              illustration="/illustrations/Sprout.svg"
              bestFor="Brands that need steady, light-touch email management"
              items={[
                "2–4 email campaigns/month",
                "Monthly flow check and maintenance",
                "Basic segment management",
                "Monthly reporting snapshot",
                "Email and Loom support",
              ]}
              price="$800 / month"
              enquireLink="/enquire?service=ongoing"
            />

            <ServiceCard
              title="Grow"
              illustration="/illustrations/Grow.svg"
              bestFor="Brands ready to scale email as a revenue channel"
              items={[
                "4–6 email campaigns/month",
                "Fortnightly flow review and optimisation",
                "Active segment building and refinement",
                "Monthly content calendar (collaborative)",
                "Monthly report with insights",
                "1x 30-min strategy call/month",
                "Basic SMS (2/month)",
              ]}
              price="$1,800 / month"
              enquireLink="/enquire?service=ongoing"
            />

            <ServiceCard
              title="Flourish"
              illustration="/illustrations/Flourish.svg"
              bestFor="Brands wanting full-service email and SMS"
              items={[
                "6–8+ email campaigns/month",
                "Weekly flow review and A/B testing",
                "Advanced and predictive segmentation",
                "Monthly content calendar and strategy",
                "Monthly report plus quarterly strategy review",
                "2x 30-min strategy calls/month",
                "Full SMS strategy and campaigns",
              ]}
              price="$3,000 / month"
              enquireLink="/enquire?service=ongoing"
            />
          </div>

          {/* Retainer note */}
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-warm-grey">
            All retainers start with a 3-month minimum — it takes at least that long to
            see real results from email. After that, it&apos;s a 30-day rolling agreement. No
            lock-ins.
          </p>
        </div>
      </section>

      {/* ===== NOT SURE CTA ===== */}
      <section className="bg-forest px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-3xl font-bold text-cream md:text-4xl">
            Not sure where you sit?
          </h2>
          <p className="mb-10 text-base leading-relaxed text-cream/90">
            No worries — take our free scorecard to see where your email stands, or just
            get in touch and we&apos;ll help you figure out the right fit.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[14px] bg-terracotta px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-[#b5604a] hover:shadow-[0_4px_12px_rgba(200,112,90,0.35)] hover:-translate-y-0.5"
            >
              Get your scorecard
            </a>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-[14px] border-2 border-cream/80 px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-cream/10"
            >
              Enquire now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

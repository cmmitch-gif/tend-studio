"use client";

const placeholderLogos = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
];

export default function BrandBar() {
  return (
    <section className="bg-mint-bg py-8 overflow-hidden">
      <p className="mb-4 text-center text-xs font-medium tracking-wide text-warm-grey uppercase">
        Trusted by brands including
      </p>
      <div className="relative">
        <div className="animate-marquee flex w-max items-center gap-16">
          {/* Duplicate logos for seamless loop */}
          {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
            <div
              key={i}
              className="flex h-10 items-center justify-center rounded-[12px] bg-sage/20 px-8 text-sm font-medium text-warm-grey whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

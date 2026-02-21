"use client";

import Image from "next/image";

type Brand = { name: string; logo?: string };

const brands: Brand[] = [
  { name: "Arc'teryx", logo: "/brands/arcteryx.svg" },
  { name: "Brand Two" },
  { name: "Brand Three" },
  { name: "Brand Four" },
  { name: "Brand Five" },
  { name: "Brand Six" },
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
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex h-10 items-center justify-center rounded-[12px] bg-sage/20 px-8 text-sm font-medium text-warm-grey whitespace-nowrap"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              ) : (
                brand.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  illustration: string;
  oneLiner?: string;
  bestFor?: string;
  items: string[];
  price: string;
  enquireLink: string;
}

export default function ServiceCard({
  title,
  illustration,
  oneLiner,
  bestFor,
  items,
  price,
  enquireLink,
}: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[20px] bg-warm-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:p-8">
      {/* Illustration */}
      <div className="mb-5 flex justify-center">
        <Image
          src={illustration}
          alt={title}
          width={180}
          height={140}
          className="h-[140px] w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-forest">{title}</h3>

      {/* One-liner or Best For */}
      {oneLiner && (
        <p className="mb-4 text-sm text-warm-grey">{oneLiner}</p>
      )}
      {bestFor && (
        <p className="mb-4 text-sm text-warm-grey">
          <span className="font-semibold text-charcoal">Best for:</span> {bestFor}
        </p>
      )}

      {/* Bullet list */}
      <ul className="mb-6 flex-1 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
            {item}
          </li>
        ))}
      </ul>

      {/* Price */}
      <p className="mb-5 text-2xl font-bold text-forest">{price}</p>

      {/* CTA */}
      <Link
        href={enquireLink}
        className="inline-flex items-center justify-center rounded-[14px] bg-forest px-7 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-forest/90 hover:shadow-[0_4px_12px_rgba(45,106,79,0.3)]"
      >
        Enquire now
      </Link>
    </div>
  );
}

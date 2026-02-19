import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-forest">
            <span className="text-xl">🌱</span>
            <span>Tend Studio</span>
          </Link>

          {/* Description */}
          <p className="max-w-md text-sm text-warm-grey">
            Klaviyo email and SMS marketing for Australian ecommerce brands.
          </p>

          {/* Links */}
          <div className="flex gap-4 text-sm font-medium text-charcoal">
            <Link
              href="/services"
              className="transition-colors duration-200 hover:text-forest"
            >
              Services
            </Link>
            <span className="text-sage">|</span>
            <Link
              href="/enquire"
              className="transition-colors duration-200 hover:text-forest"
            >
              Contact
            </Link>
          </div>

          {/* Divider */}
          <div className="mt-4 w-full border-t border-sage/20 pt-6">
            <div className="flex flex-col gap-2 text-xs text-warm-grey sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; 2026 Tend Studio. All rights reserved.</p>
              <p>Based in Melbourne, Australia.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

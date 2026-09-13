import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-espresso] text-[--color-secondary] pt-16 pb-8 border-t border-[--color-primary-light]/20">
      <div className="container-main grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[--color-secondary] mb-4 inline-block">
            COZY CAFE
          </Link>
          <p className="text-[--color-secondary]/90 max-w-sm mt-4 text-sm leading-relaxed">
            A cozy spot for coffee, food, and chill vibes. The perfect environment for students, professionals, and locals to relax and connect.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-[--color-secondary]">Navigation</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-[--color-secondary]/90 hover:text-[--color-secondary] transition-colors text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[--color-secondary]/90 hover:text-[--color-secondary] transition-colors text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-[--color-secondary]/90 hover:text-[--color-secondary] transition-colors text-sm">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[--color-secondary]/90 hover:text-[--color-secondary] transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-[--color-secondary]">Visit Us</h3>
          <address className="not-italic text-[--color-secondary]/90 text-sm space-y-4">
            <p>
              8834 E 34 Rd #131<br />
              Cadillac, MI 49601
            </p>
            <p>
              <a href="tel:+15688289017" className="hover:text-[--color-secondary] transition-colors">
                +1 (56) 882-89017
              </a>
            </p>
          </address>
          
          {/* Social Media Placeholders */}
          <div className="flex space-x-4 mt-6">
            <span title="Instagram (Coming Soon)" className="w-8 h-8 rounded-full bg-[--color-secondary]/10 flex items-center justify-center text-[--color-secondary]/80 cursor-not-allowed" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </span>
            <span title="Facebook (Coming Soon)" className="w-8 h-8 rounded-full bg-[--color-secondary]/10 flex items-center justify-center text-[--color-secondary]/80 cursor-not-allowed" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </span>
          </div>
        </div>
      </div>

      <div className="container-main border-t border-[--color-secondary]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[--color-secondary]/80">
        <p>© {currentYear} Cozy Cafe. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Cadillac, MI</p>
      </div>
    </footer>
  );
}

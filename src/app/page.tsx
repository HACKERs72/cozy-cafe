import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { MenuCard } from "@/components/menu/MenuCard";
import { getFeaturedMenuItems } from "@/data/menu";

export default function Home() {
  const featuredMenu = getFeaturedMenuItems();

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-[--color-secondary] overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Abstract background treatment in lieu of a hero image */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[--color-beige] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[--color-sage] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="container-main relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl space-y-8">
            <span className="inline-block text-[--color-accent] font-medium tracking-widest text-sm uppercase mb-2">
              Cozy Cafe • Cadillac, MI
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[--color-primary] leading-[1.1]">
              Good coffee.<br />
              Good food.<br />
              Good moments.
            </h1>
            <p className="text-lg md:text-xl text-[--color-espresso]/80 max-w-xl leading-relaxed">
              A comfortable spot for coffee, food, and chill vibes. Drop by to work, study, meet someone, or simply slow down.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
              <Link href="/menu" className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}>
                View Our Menu
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
                Visit Cozy Cafe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Café Introduction */}
      <section className="bg-white section-spacing border-t border-[--color-muted-brown]/10">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block text-[--color-accent] font-medium tracking-widest text-xs uppercase">
                Welcome to Cozy Cafe
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary] leading-tight">
                A comfortable spot for coffee, food, and chill vibes
              </h2>
              <p className="text-[--color-muted-brown] leading-relaxed text-lg">
                We believe that great coffee and good food should be enjoyed in a welcoming environment. Whether you need fast WiFi to focus, good lighting to read, or just a relaxed atmosphere to unwind, you&apos;ll find it here.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <span className="inline-flex items-center text-[--color-primary] font-medium hover:text-[--color-accent] transition-colors group">
                    Learn More About Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Image Placeholder Treatment */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-[--color-off-white] rounded-2xl overflow-hidden border border-[--color-muted-brown]/10 shadow-sm flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[--color-beige]/40 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <span className="text-[--color-muted-brown]/40 font-serif text-2xl tracking-widest uppercase">Atmosphere</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Menu */}
      <section className="bg-[--color-secondary] section-spacing">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary]">
                Popular right now
              </h2>
              <p className="text-[--color-muted-brown] leading-relaxed">
                A curated selection of our most loved pastries, snacks, and light meals.
              </p>
            </div>
            <Link href="/menu" className={buttonVariants({ variant: "secondary" })}>
              View Full Menu
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Cozy Cafe / Experience */}
      <section className="bg-white section-spacing">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary] text-center mb-16 max-w-2xl mx-auto">
            Everything you need for a perfect moment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="space-y-4 p-6 rounded-2xl bg-[--color-off-white] border border-transparent transition-all duration-300 hover:bg-[--color-secondary] hover:-translate-y-1 hover:shadow-md hover:border-[--color-muted-brown]/20">
              <div className="w-12 h-12 bg-[--color-beige]/50 rounded-xl flex items-center justify-center text-[--color-primary]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[--color-espresso]">Coffee & Food</h3>
              <p className="text-[--color-muted-brown] text-sm leading-relaxed">
                Coffee, pastries, snacks, and light meals prepared with care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 p-6 rounded-2xl bg-[--color-off-white] border border-transparent transition-all duration-300 hover:bg-[--color-secondary] hover:-translate-y-1 hover:shadow-md hover:border-[--color-muted-brown]/20">
              <div className="w-12 h-12 bg-[--color-beige]/50 rounded-xl flex items-center justify-center text-[--color-primary]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 21 3-9 2-3"/><path d="M16 5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2Z"/><path d="m5 16 3-3-2-8"/><path d="M2 17h10"/><path d="M20 22V6"/><path d="M20 6a2 2 0 0 0-2-2h-2"/><path d="M22 6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[--color-espresso]">Comfortable Seating</h3>
              <p className="text-[--color-muted-brown] text-sm leading-relaxed">
                A relaxed place to sit, work, study, or spend time with friends.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 p-6 rounded-2xl bg-[--color-off-white] border border-transparent transition-all duration-300 hover:bg-[--color-secondary] hover:-translate-y-1 hover:shadow-md hover:border-[--color-muted-brown]/20">
              <div className="w-12 h-12 bg-[--color-beige]/50 rounded-xl flex items-center justify-center text-[--color-primary]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[--color-espresso]">Fast WiFi</h3>
              <p className="text-[--color-muted-brown] text-sm leading-relaxed">
                Suitable for students and professionals who need a reliable connection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4 p-6 rounded-2xl bg-[--color-off-white] border border-transparent transition-all duration-300 hover:bg-[--color-secondary] hover:-translate-y-1 hover:shadow-md hover:border-[--color-muted-brown]/20">
              <div className="w-12 h-12 bg-[--color-beige]/50 rounded-xl flex items-center justify-center text-[--color-primary]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[--color-espresso]">Good Lighting</h3>
              <p className="text-[--color-muted-brown] text-sm leading-relaxed">
                A welcoming atmosphere naturally designed around your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Atmosphere Section */}
      <section className="bg-[--color-beige] text-[--color-espresso] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image panel */}
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-full bg-[--color-muted-brown]/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
            <span className="text-[--color-espresso]/30 font-serif text-3xl tracking-widest uppercase relative z-10">Cafe Interior</span>
          </div>
          
          {/* Text panel */}
          <div className="order-1 lg:order-2 py-20 px-8 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-[--color-espresso]">
              Stay for the coffee.<br />
              Stay for the atmosphere.
            </h2>
            <p className="text-[--color-espresso]/80 text-lg leading-relaxed mb-10 max-w-lg">
              We&apos;ve created a space that feels like a second home. With great lighting, comfortable seating, and chill vibes, it&apos;s the perfect backdrop for your day.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-[--color-espresso]/10 pt-10 max-w-lg">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[--color-espresso]">Connect</h4>
                <p className="text-[--color-espresso]/70 text-sm">Fast, reliable WiFi for all your devices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[--color-espresso]">Unwind</h4>
                <p className="text-[--color-espresso]/70 text-sm">Comfortable seating for hours of reading or chat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-[--color-beige] section-spacing border-t border-[--color-muted-brown]/10 text-center">
        <div className="container-main max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[--color-espresso]">
            Ready for a great cup of coffee?
          </h2>
          <p className="text-lg text-[--color-espresso]/80">
            Join us at 8834 E 34 Rd in Cadillac. We&apos;d love to see you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="/menu" className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}>
              View Full Menu
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

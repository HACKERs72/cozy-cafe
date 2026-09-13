import type { Metadata } from "next";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { MenuCard } from "@/components/menu/MenuCard";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the Cozy Cafe menu in Cadillac, Michigan. Serving fresh coffee, pastries, snacks, and light meals.",
};

export default function MenuPage() {
  // Extract unique categories
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <>
      {/* 1. Page Hero */}
      <section className="bg-[--color-secondary] py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract pattern placeholder */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[--color-beige] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        </div>
        
        <div className="container-main relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-[--color-accent] font-medium tracking-widest text-xs uppercase">
            Our Menu
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[--color-primary] leading-tight">
            Something good for every kind of day.
          </h1>
          <p className="text-lg md:text-xl text-[--color-espresso]/80 leading-relaxed max-w-2xl mx-auto">
            Enjoy our selection of freshly prepared pastries, snacks, and light meals. 
            Perfect for pairing with a great cup of coffee.
          </p>
        </div>
      </section>

      {/* 2. Menu Layout */}
      <section className="bg-white section-spacing border-t border-[--color-muted-brown]/10">
        <div className="container-main max-w-5xl">
          {/* Categories Navigation (Static visual links for future expansion) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 pb-8 border-b border-[--color-muted-brown]/10">
            {categories.map((category) => (
              <a 
                key={category} 
                href={`#${category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                className="px-6 py-2 rounded-full border border-[--color-muted-brown]/20 text-[--color-espresso] hover:border-[--color-primary] hover:text-[--color-primary] transition-colors font-medium text-sm"
              >
                {category}
              </a>
            ))}
            {/* Placeholders for future categories */}
            <span className="px-6 py-2 rounded-full border border-[--color-muted-brown]/10 text-[--color-muted-brown]/40 font-medium text-sm border-dashed cursor-not-allowed">
              Drinks (Coming Soon)
            </span>
            <span className="px-6 py-2 rounded-full border border-[--color-muted-brown]/10 text-[--color-muted-brown]/40 font-medium text-sm border-dashed cursor-not-allowed">
              Desserts (Coming Soon)
            </span>
          </div>

          <div className="space-y-24">
            {categories.map((category) => {
              const categoryItems = menuItems.filter((item) => item.category === category);
              const categoryId = category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
              
              return (
                <div key={category} id={categoryId} className="scroll-mt-32">
                  <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                    <h2 className="text-3xl font-serif text-[--color-primary]">{category}</h2>
                    <div className="hidden md:block flex-1 h-px bg-[--color-muted-brown]/10"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-[--color-beige] section-spacing text-center">
        <div className="container-main max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif text-[--color-espresso]">
            Join us for a bite.
          </h2>
          <p className="text-lg text-[--color-espresso]/80">
            All items are available daily. Come in and find your comfortable spot.
          </p>
          <div className="pt-4">
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Visit Cozy Cafe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

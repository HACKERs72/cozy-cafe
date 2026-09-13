import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Cozy Cafe, our story, and what makes our Cadillac, Michigan location the perfect spot for coffee, food, and relaxed moments.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="bg-[--color-secondary] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 mix-blend-overlay">
          {/* Abstract pattern placeholder */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 L100,0 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container-main relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-[--color-muted-brown] font-medium tracking-widest text-xs uppercase">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[--color-espresso] leading-tight">
            More than just a coffee shop.
          </h1>
          <p className="text-lg md:text-xl text-[--color-espresso]/80 leading-relaxed max-w-2xl mx-auto">
            A welcoming space in Cadillac, MI designed for connection, comfort, and everyday moments.
          </p>
        </div>
      </section>

      {/* 2. Café Concept / Story */}
      <section className="bg-white section-spacing">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image panel */}
            <div className="group relative aspect-square md:aspect-[4/3] bg-[--color-off-white] rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
              <span className="text-[--color-muted-brown]/40 font-serif text-xl tracking-widest uppercase text-center px-4 transition-transform duration-500 group-hover:scale-[1.02]">
                Cafe Front / Interior<br/>Placeholder
              </span>
            </div>

            {/* Text panel */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary] leading-tight">
                Designed around a simple idea
              </h2>
              <p className="text-lg text-[--color-espresso]/90 leading-relaxed font-medium">
                Cozy Cafe was designed around a simple idea: create a comfortable place where good coffee, good food, and relaxed moments come together.
              </p>
              <div className="space-y-4 text-[--color-muted-brown] leading-relaxed">
                <p>
                  We wanted to build an environment that caters to everyone—whether you&apos;re a student looking for a quiet corner to study, a professional needing fast WiFi for a few hours of remote work, or a group of friends catching up over light meals.
                </p>
                <p>
                  It&apos;s about providing the perfect backdrop for your day. That means comfortable seating, warm lighting, and a menu that brings people together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Believe In (Values) */}
      <section className="bg-[--color-secondary] section-spacing">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary]">
              What we stand for
            </h2>
            <p className="text-[--color-muted-brown]">
              The core principles that guide our everyday approach to serving you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[--color-muted-brown]/5">
              <span className="text-[--color-accent] font-serif text-5xl opacity-20 block mb-4">01</span>
              <h3 className="text-2xl font-serif text-[--color-espresso] mb-4">Good Coffee</h3>
              <p className="text-[--color-muted-brown] leading-relaxed">
                A welcoming café centered around quality coffee and freshly prepared food. We believe that what&apos;s in your cup matters as much as the environment you drink it in.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[--color-muted-brown]/5 lg:translate-y-8">
              <span className="text-[--color-accent] font-serif text-5xl opacity-20 block mb-4">02</span>
              <h3 className="text-2xl font-serif text-[--color-espresso] mb-4">Comfort</h3>
              <p className="text-[--color-muted-brown] leading-relaxed">
                A place with comfortable seating and a relaxed atmosphere. We&apos;ve designed our layout to ensure you always have a comfortable spot, no matter how long you plan to stay.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[--color-muted-brown]/5">
              <span className="text-[--color-accent] font-serif text-5xl opacity-20 block mb-4">03</span>
              <h3 className="text-2xl font-serif text-[--color-espresso] mb-4">Community</h3>
              <p className="text-[--color-muted-brown] leading-relaxed">
                A welcoming environment for students, professionals, locals, families, and visitors. Everyone is welcome here in Cadillac.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[--color-muted-brown]/5 lg:translate-y-8">
              <span className="text-[--color-accent] font-serif text-5xl opacity-20 block mb-4">04</span>
              <h3 className="text-2xl font-serif text-[--color-espresso] mb-4">Everyday Moments</h3>
              <p className="text-[--color-muted-brown] leading-relaxed">
                A place to work, meet, pause, or simply enjoy some time away. We&apos;re here to facilitate the simple, enjoyable moments of your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Audience / Atmosphere */}
      <section className="bg-white section-spacing border-b border-[--color-muted-brown]/10">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[--color-off-white] rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-[--color-primary]">
                Your spot in Cadillac
              </h2>
              <p className="text-lg text-[--color-muted-brown] leading-relaxed">
                Whether you&apos;re a local resident grabbing your morning coffee, a professional seeking a change of scenery, a student needing focus time, or a visitor exploring the area, Cozy Cafe is made for you.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="group w-full max-w-[250px] aspect-square rounded-full border-4 border-white shadow-lg bg-[--color-beige] flex items-center justify-center overflow-hidden">
                <span className="text-[--color-primary]/50 font-medium px-4 text-center transition-transform duration-500 group-hover:scale-[1.02]">Community<br/>Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-[--color-beige] text-[--color-espresso] section-spacing text-center">
        <div className="container-main max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[--color-espresso]">
            Come experience it for yourself.
          </h2>
          <p className="text-lg text-[--color-espresso]/80">
            Check out our menu or find directions to visit us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="/menu" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
              View Our Menu
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}>
              Visit Cozy Cafe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

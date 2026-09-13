import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cozy Cafe in Cadillac, Michigan. Get directions, reach out, or just drop by to say hello.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-[--color-beige] text-[--color-espresso] py-20 lg:py-28 relative overflow-hidden">
        <div className="container-main relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-[--color-muted-brown] font-medium tracking-widest text-xs uppercase">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-[--color-espresso]">
            Come by, say hello.
          </h1>
          <p className="text-lg md:text-xl text-[--color-espresso]/80 leading-relaxed max-w-xl mx-auto">
            Whether you have a question or just want to grab a great cup of coffee, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Contact Information & Form Layout */}
      <section className="bg-white section-spacing border-t border-[--color-muted-brown]/10">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Information Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-[--color-primary] mb-6">
                  Our Location
                </h2>
                <address className="not-italic text-lg text-[--color-espresso]/90 space-y-2">
                  <p className="font-medium text-[--color-espresso]">Cozy Cafe</p>
                  <p>8834 E 34 Rd #131</p>
                  <p>Cadillac, MI 49601</p>
                </address>
              </div>

              <div>
                <h3 className="text-xl font-serif text-[--color-primary] mb-4">
                  Call Us
                </h3>
                <a href="tel:+15688289017" className="text-lg text-[--color-espresso] hover:text-[--color-accent] transition-colors">
                  +1 (56) 882-89017
                </a>
              </div>

              {/* Decorative Atmosphere Visual */}
              <div className="group relative aspect-video bg-[--color-off-white] rounded-2xl overflow-hidden border border-[--color-muted-brown]/10 flex items-center justify-center mt-12">
                <span className="text-[--color-muted-brown]/40 font-serif text-lg tracking-widest uppercase text-center transition-transform duration-500 group-hover:scale-[1.02]">
                  Atmosphere / Exterior<br/>Placeholder
                </span>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[--color-off-white] p-8 md:p-12 rounded-3xl border border-[--color-muted-brown]/5 shadow-sm">
              <h2 className="text-2xl font-serif text-[--color-primary] mb-8">
                Send us a message
              </h2>
              
              <form className="space-y-6" action="#">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[--color-espresso]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-[--color-muted-brown]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all text-[--color-espresso]"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[--color-espresso]">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-[--color-muted-brown]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all text-[--color-espresso]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-[--color-espresso]">
                    Subject <span className="text-sm font-normal text-[--color-muted-brown]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-[--color-muted-brown]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all text-[--color-espresso]"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[--color-espresso]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[--color-muted-brown]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all text-[--color-espresso] resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <Button type="button" variant="primary" className="w-full h-12 text-base">
                  Send Message
                </Button>
                
                <p className="text-xs text-[--color-muted-brown] text-center mt-4">
                  Note: This form is a UI demonstration. Backend integration is required.
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

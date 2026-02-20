"use client";

import { CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Tour() {
  return (
    <section id="tour" className="py-24 md:py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Tour" subtitle="Live Dates" />

        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <div className="border border-border bg-bg-card p-12 md:p-16">
            <CalendarDays size={48} className="text-crimson mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl uppercase tracking-[0.15em] text-text-primary font-semibold mb-4">
              Tour Dates Coming Soon
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Stay tuned for info on our inaugural tour in support of{" "}
              <span className="text-amber italic">Pull Back the Curtain</span>.
              Sign up for the newsletter to be the first to know.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300"
            >
              Get Notified
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

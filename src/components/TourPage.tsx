"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, Ticket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

// When tour dates are announced, add them here
const tourDates: {
  date: string;
  venue: string;
  city: string;
  ticketUrl?: string;
  soldOut?: boolean;
}[] = [];

export default function TourPage() {
  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-amber transition-colors text-sm uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Tour" subtitle="Live Dates" />

        {tourDates.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {tourDates.map((show, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-border bg-bg-card hover:border-crimson/40 transition-all duration-300 p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Date */}
                  <div className="flex items-center gap-3 md:w-48 shrink-0">
                    <CalendarDays size={18} className="text-crimson" />
                    <span className="text-text-primary uppercase tracking-[0.1em] text-sm font-semibold">
                      {show.date}
                    </span>
                  </div>

                  {/* Venue & City */}
                  <div className="flex-1">
                    <h3 className="text-text-primary text-sm uppercase tracking-[0.08em] font-semibold">
                      {show.venue}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={12} className="text-text-muted" />
                      <span className="text-text-secondary text-xs uppercase tracking-[0.15em]">
                        {show.city}
                      </span>
                    </div>
                  </div>

                  {/* Ticket Button */}
                  <div className="shrink-0">
                    {show.soldOut ? (
                      <span className="px-6 py-2.5 border border-text-muted/30 text-text-muted uppercase tracking-[0.2em] text-xs inline-block">
                        Sold Out
                      </span>
                    ) : show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300"
                      >
                        <Ticket size={14} />
                        Tickets
                      </a>
                    ) : (
                      <span className="px-6 py-2.5 border border-amber/30 text-amber uppercase tracking-[0.2em] text-xs inline-block">
                        Free
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          /* Placeholder state */
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="border border-border bg-bg-card p-12 md:p-20">
              <CalendarDays
                size={56}
                className="text-crimson mx-auto mb-8"
              />
              <h3 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-text-primary font-semibold mb-6">
                Tour Dates Coming Soon
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed max-w-md mx-auto">
                Stay tuned for info on our inaugural tour in support of{" "}
                <span className="text-amber italic">
                  Pull Back the Curtain
                </span>
                .
              </p>
              <p className="text-text-secondary mb-10 leading-relaxed max-w-md mx-auto">
                Sign up for the newsletter to be the first to know when dates
                are announced.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300"
              >
                Get Notified
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

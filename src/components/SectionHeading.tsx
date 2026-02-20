"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="text-center mb-16">
      <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-crimson to-transparent mb-6" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.15em] text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary tracking-[0.2em] uppercase text-sm max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-crimson to-transparent mt-6" />
    </AnimatedSection>
  );
}

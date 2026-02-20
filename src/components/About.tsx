"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const members = [
  {
    name: "Andrew Licht",
    role: "Vocals",
    image: "/images/members/andrew.jpg",
  },
  {
    name: "Pat Deeb",
    role: "Guitars, Keys, Programming",
    image: "/images/members/pat.jpg",
  },
  {
    name: "Morgan Rose",
    role: "Drums",
    image: "/images/members/morgan.jpg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-bg-elevated curtain-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About" subtitle="Somewhere in the, USA" />

        {/* Band Photo */}
        <AnimatedSection className="mb-20">
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            <Image
              src="/images/band-group.jpg"
              alt="INTERLEAVED"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-bg-elevated/30" />
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="relative max-w-3xl mx-auto text-center mb-20">
          {/* Watermark symbol */}
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt=""
            width={200}
            height={208}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none"
            aria-hidden="true"
          />
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            INTERLEAVED is a three-piece rock band from Louisiana blending heavy
            riffs, atmospheric textures, and raw emotion. Formed by Pat Deeb,
            Andrew Licht, and Morgan Rose, the band channels influences from
            alternative metal to post-rock into a sound that is unmistakably
            their own.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            Their debut EP{" "}
            <span className="text-text-primary italic">
              There&apos;s Blood In The Water
            </span>{" "}
            and singles{" "}
            <span className="text-text-primary italic">
              Pulling On That Thread
            </span>
            ,{" "}
            <span className="text-text-primary italic">Break the Slate</span>,
            and{" "}
            <span className="text-text-primary italic">Condescend</span>{" "}
            established their cinematic, hard-hitting approach. Now, with their
            follow-up album{" "}
            <span className="text-amber italic">Pull Back the Curtain</span>{" "}
            arriving Summer 2026, INTERLEAVED is ready to make their mark.
          </p>
        </AnimatedSection>

        {/* Members */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <div className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg uppercase tracking-[0.15em] text-text-primary font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-crimson mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

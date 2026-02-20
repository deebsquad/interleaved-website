"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const releases = [
  {
    title: "Pull Back the Curtain",
    type: "Album",
    year: "2026",
    image: "/images/pbtc-cover.jpg",
    spotifyUrl: "https://open.spotify.com/artist/1X0Bg6G7y24oJ2HgEEBP0U",
    appleUrl: "https://music.apple.com/us/artist/interleaved/1675171160",
    featured: true,
    tracks: [
      "Imposter",
      "Hope Is a 4 Letter Word",
      "Dissolve",
      "Burn Bridges Burn",
      "Losing You",
      "King Regret",
    ],
  },
  {
    title: "There's Blood In The Water",
    type: "EP",
    year: "2023",
    image: "/images/tbitw.png",
    spotifyUrl: "https://open.spotify.com/album/0gLWestMXcDDKtUNkeVvym?si=iUJWpaxyTMiccAv_TXHsYQ",
    appleUrl: "https://music.apple.com/us/album/theres-blood-in-the-water-ep/1730125993",
    featured: false,
  },
  {
    title: "Break the Slate",
    type: "Single",
    year: "2024",
    image: "/images/singles/breaktheslate.png",
    spotifyUrl: "https://open.spotify.com/album/6LzYfiHG96GKRstPMjxOHA?si=xDBnkw_tSzKQo_Knugl8TA",
    appleUrl: "https://music.apple.com/us/album/break-the-slate-single/1687724289",
    featured: false,
  },
  {
    title: "Condescend",
    type: "Single",
    year: "2025",
    image: "/images/singles/condescend.jpg",
    spotifyUrl: "https://open.spotify.com/album/6n4dk1cX69TyXzFsMJUGka?si=oQe-y-wVQZG2WSdk1b6vcA",
    appleUrl: "https://music.apple.com/us/album/condescend-single/1706902803",
    featured: false,
  },
  {
    title: "Pulling On That Thread",
    type: "Single",
    year: "2023",
    image: "/images/singles/pott.jpg",
    spotifyUrl: "https://open.spotify.com/album/3R4sFdoaiyb1i96KDNFOLs?si=2JeyhggbRdGodd0c9cexww",
    appleUrl: "https://music.apple.com/us/album/pulling-on-that-thread-single/1672095019",
    featured: false,
  },
];

export default function Music() {
  const featuredRelease = releases.find((r) => r.featured);
  const otherReleases = releases.filter((r) => !r.featured);

  return (
    <section id="music" className="py-24 md:py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Music" subtitle="Discography" />

        {/* Featured Release */}
        {featuredRelease && (
          <AnimatedSection className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="relative group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={featuredRelease.image}
                    alt={featuredRelease.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Crimson accent border */}
                <div className="absolute -inset-1 border border-crimson/20 -z-10" />
              </div>

              <div>
                <span className="text-crimson uppercase tracking-[0.3em] text-xs font-semibold">
                  New {featuredRelease.type} — {featuredRelease.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] text-text-primary mt-3 mb-6">
                  {featuredRelease.title}
                </h3>

                {/* Track listing — uncomment when ready to reveal
                {featuredRelease.tracks && (
                  <div className="mb-8">
                    <ol className="space-y-2">
                      {featuredRelease.tracks.map((track, i) => (
                        <li
                          key={track}
                          className="flex items-baseline gap-4 text-text-secondary hover:text-text-primary transition-colors"
                        >
                          <span className="text-crimson text-xs font-mono w-6 text-right">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="uppercase tracking-[0.1em] text-sm">
                            {track}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                */}

                <p className="text-text-secondary uppercase tracking-[0.2em] text-sm mb-8 italic">
                  Tracklisting coming soon!
                </p>

                <div className="flex gap-4">
                  <span className="px-6 py-3 bg-text-muted/30 text-text-muted uppercase tracking-[0.2em] text-xs font-semibold cursor-not-allowed">
                    Spotify
                  </span>
                  <span className="px-6 py-3 border border-text-muted/30 text-text-muted uppercase tracking-[0.2em] text-xs cursor-not-allowed">
                    Apple Music
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Spotify Embed */}
        <AnimatedSection className="mb-20 max-w-3xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/artist/1X0Bg6G7y24oJ2HgEEBP0U?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </AnimatedSection>

        {/* Other Releases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherReleases.map((release, i) => (
            <AnimatedSection key={release.title} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/30 transition-all duration-500" />
                </div>
                <h4 className="text-sm uppercase tracking-[0.1em] text-text-primary mb-1">
                  {release.title}
                </h4>
                <p className="text-xs text-text-muted uppercase tracking-[0.2em] mb-3">
                  {release.type} — {release.year}
                </p>
                <div className="flex gap-2">
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.15em] text-[10px] font-semibold transition-all duration-300"
                  >
                    Spotify
                  </a>
                  <a
                    href={release.appleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-text-muted hover:border-amber text-text-secondary hover:text-amber uppercase tracking-[0.15em] text-[10px] transition-all duration-300"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "INTERLEAVED",
    url: "https://interleavedmusic.com",
    image: "https://interleavedmusic.com/og-image.jpg",
    genre: ["Alternative Metal", "Post-Rock", "Hard Rock"],
    foundingLocation: {
      "@type": "Place",
      name: "Louisiana, USA",
    },
    member: [
      {
        "@type": "Person",
        name: "Andrew Licht",
        roleName: "Vocals",
      },
      {
        "@type": "Person",
        name: "Pat Deeb",
        roleName: "Guitars, Keys, Programming",
      },
      {
        "@type": "Person",
        name: "Morgan Rose",
        roleName: "Drums",
      },
    ],
    album: [
      {
        "@type": "MusicAlbum",
        name: "Pull Back the Curtain",
        datePublished: "2026",
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "There's Blood In The Water",
        datePublished: "2023",
        albumProductionType: "https://schema.org/EPAlbum",
      },
    ],
    sameAs: [
      "https://open.spotify.com/artist/1X0Bg6G7y24oJ2HgEEBP0U",
      "https://music.apple.com/us/artist/interleaved/1675171160",
      "https://www.youtube.com/@interleavedofficial",
      "https://www.facebook.com/interleavedmusic",
      "https://www.instagram.com/interleaved.music/",
      "https://www.tiktok.com/@interleavedmusic",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

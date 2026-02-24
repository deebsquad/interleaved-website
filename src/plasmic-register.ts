import { PLASMIC } from "./plasmic-init";

// Import all components to register
import Hero from "./components/Hero";
import Music from "./components/Music";
import About from "./components/About";
import Tour from "./components/Tour";
import MerchPreview from "./components/MerchPreview";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import SectionDivider from "./components/SectionDivider";
import AnimatedSection from "./components/AnimatedSection";

// --- Page-level section components (no props, self-contained) ---

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {},
  description: "Full-viewport hero section with album cover background, logos, and CTAs.",
});

PLASMIC.registerComponent(Music, {
  name: "Music",
  props: {},
  description: "Music section with featured release, tracklisting, and discography grid.",
});

PLASMIC.registerComponent(About, {
  name: "About",
  props: {},
  description: "About section with band photo, member bios, and member cards.",
});

PLASMIC.registerComponent(Tour, {
  name: "Tour",
  props: {},
  description: "Tour preview section with upcoming dates or placeholder.",
});

PLASMIC.registerComponent(MerchPreview, {
  name: "MerchPreview",
  props: {},
  description: "Merch preview section with featured products and link to full store.",
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {},
  description: "Footer with social links, FanFlowy VIP list signup, and copyright.",
});

// --- Reusable building-block components ---

PLASMIC.registerComponent(SectionHeading, {
  name: "SectionHeading",
  props: {
    title: {
      type: "string",
      defaultValue: "Section Title",
      description: "The main heading text.",
    },
    subtitle: {
      type: "string",
      description: "Optional subtitle text below the heading.",
    },
  },
  description: "Centered section heading with decorative crimson dividers.",
});

PLASMIC.registerComponent(SectionDivider, {
  name: "SectionDivider",
  props: {},
  description: "Decorative divider with the band symbol between gradient lines.",
});

PLASMIC.registerComponent(AnimatedSection, {
  name: "AnimatedSection",
  props: {
    children: {
      type: "slot",
      defaultValue: "Drop content here",
    },
    className: {
      type: "string",
      description: "Additional CSS classes.",
    },
    delay: {
      type: "number",
      defaultValue: 0,
      description: "Animation delay in seconds.",
    },
  },
  description: "Wrapper that animates children on scroll (fade up).",
});

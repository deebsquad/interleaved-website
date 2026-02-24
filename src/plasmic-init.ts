import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "interleaved_website",
      token:
        "n8wD37ctxfpX9yPYYx3X39qMbQE5CRly9Rx0RrM7xrY43UlwKPXdk4gekRhVPG2s80EgKZ8cpX7F3M0njg",
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

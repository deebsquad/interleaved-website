"use client";

import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import "@/plasmic-register";

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}

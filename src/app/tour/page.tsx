import type { Metadata } from "next";
import TourPage from "@/components/TourPage";

export const metadata: Metadata = {
  title: "Tour",
  description:
    "INTERLEAVED live tour dates. See us on the road in support of Pull Back the Curtain.",
  openGraph: {
    title: "Tour — INTERLEAVED",
    description:
      "INTERLEAVED live tour dates. See us on the road in support of Pull Back the Curtain.",
  },
};

export default function Tour() {
  return <TourPage />;
}

import type { Metadata } from "next";
import MerchPage from "@/components/MerchPage";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official INTERLEAVED merchandise. Tees, hoodies, hats, and more.",
  openGraph: {
    title: "Merch — INTERLEAVED",
    description: "Official INTERLEAVED merchandise. Tees, hoodies, hats, and more.",
  },
};

export default function Merch() {
  return <MerchPage />;
}

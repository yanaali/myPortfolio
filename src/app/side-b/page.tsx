import type { Metadata } from "next";
import MusicGallery from "@/components/music/music-gallery";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: `Side B · yanaali | ${config.author}`,
  description: "The music of yanaali. Explore four albums and the affection hours mixtape, with artwork and Spotify listening links.",
  alternates: { canonical: "/side-b" },
  openGraph: {
    title: "Side B · yanaali",
    description: "Another side of Aaliyan Muhammad: the music I release as yanaali.",
    url: `${config.site}/side-b`,
    images: [{ url: "/assets/music/affection-hours.jpg", width: 640, height: 640, alt: "affection hours: The Playlist cover" }],
  },
};

export default function SideBPage() {
  return <MusicGallery />;
}

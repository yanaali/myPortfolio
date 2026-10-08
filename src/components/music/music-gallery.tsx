"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Disc3, Headphones, Play, X } from "lucide-react";
import { SiSpotify } from "react-icons/si";
import { musicArtist, musicReleases, type MusicRelease } from "@/data/music";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import {
  ResponsiveDialog, ResponsiveDialogClose, ResponsiveDialogContent,
  ResponsiveDialogDescription, ResponsiveDialogTitle, ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog";
import styles from "./music.module.css";

export default function MusicGallery() {
  const featured = musicReleases.find(release => release.kind === "Mixtape")!;
  const albums = musicReleases.filter(release => release.kind === "Album");
  return (
    <LayoutGroup id="side-b">
      <main className="relative isolate overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute -right-24 top-20 -z-10 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[700px] -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft size={16} />Back to the portfolio</Link>
          <section className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-20" aria-labelledby="music-title">
            <div>
              <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-rose-700 dark:text-rose-300"><span className="h-px w-10 bg-rose-400" />Side B</p>
              <h1 id="music-title" className="font-display text-[clamp(2.6rem,7.8vw,7rem)] font-bold leading-[1.15] tracking-tight">yanaali<span className="text-rose-500">.</span></h1>
              <p className="mt-6 max-w-lg text-xl leading-relaxed text-muted-foreground">Beyond the keyboard, there&apos;s music.</p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">The albums and mixtapes I release as yanaali; produced, written and engineered by me. Pick a sleeve, open it up, and have a listen.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2"><Disc3 size={16} className="text-violet-500" />{albums.length} albums</span>
                <span className="flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2"><Headphones size={16} className="text-rose-500" />1 mixtape</span>
              </div>
              <a href={musicArtist.spotify} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1db954] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#1ed760] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-4 focus-visible:ring-offset-background"><SiSpotify size={22} />Find yanaali on Spotify<ArrowUpRight size={17} /></a>
            </div>
            <div className="mx-auto w-full max-w-[430px] lg:mx-0">
              <p className="mb-7 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground lg:text-left">Featured mixtape / {featured.year}</p>
              <ReleaseCard release={featured} featured />
            </div>
          </section>
          <section className="relative border-t border-border/70 pb-10 pt-12" aria-labelledby="shelf-title">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div><p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">The discography</p><h2 id="shelf-title" className="font-display text-3xl font-bold leading-tight md:text-4xl">On the shelf</h2></div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><Disc3 size={17} />Open any cover to listen</p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
              {albums.map(release => <ReleaseCard key={release.id} release={release} />)}
            </div>
          </section>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-6">
            <div><p className="font-medium">Singles &amp; everything in between</p><p className="mt-1 text-sm text-muted-foreground">Find the rest of my music on Spotify.</p></div>
            <a href={musicArtist.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">Explore yanaali<ArrowUpRight size={16} /></a>
          </div>
        </div>
      </main>
    </LayoutGroup>
  );
}

function ReleaseCard({ release, featured = false }: { release: MusicRelease; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const { reducedMotion } = usePerfProfile();
  const spotifyUrl = `https://open.spotify.com/album/${release.spotifyId}`;
  const coverId = reducedMotion ? undefined : `cover-${release.id}`;

  return (
    <ResponsiveDialog open={open} onOpenChange={next => { setOpen(next); if (!next) setPlayerLoaded(false); }}>
      <ResponsiveDialogTrigger asChild>
        <motion.button type="button" aria-label={`Open ${release.title}`} className="group block w-full rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-8 focus-visible:ring-offset-background"
          whileHover={reducedMotion ? undefined : { y: -6 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }} transition={{ type: "spring", stiffness: 250, damping: 22 }}>
          <div className={cn(styles.sleeve, featured && styles.featured)}>
            <div aria-hidden className={styles.coverGlow} style={{ background: release.accent }} />
            <div aria-hidden className={styles.record}><span className={styles.recordLabel} style={{ background: release.accent }}>yanaali<span /></span></div>
            <motion.div layoutId={coverId} className={styles.cover} transition={{ type: "spring", stiffness: 230, damping: 26 }}>
              <Image src={release.cover} alt={`${release.title} cover artwork`} width={640} height={640} sizes={featured ? "(max-width: 1024px) 80vw, 430px" : "(max-width: 640px) 85vw, (max-width: 1280px) 40vw, 280px"} priority={featured} className="h-full w-full object-cover" />
            </motion.div>
            <span className={styles.openHint}><Play size={18} fill="currentColor" /><span>Open release</span></span>
          </div>
          <div className="mt-5 flex items-start justify-between gap-3">
            <div><h3 className={cn("font-sans font-semibold leading-snug", featured ? "text-xl" : "text-base")}>{release.title}</h3><p className="mt-2 text-xs text-muted-foreground">{release.kind} · {release.year} · {release.tracks} tracks</p></div>
            <ArrowUpRight size={20} className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
        </motion.button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="md:max-h-[90dvh] md:max-w-4xl md:overflow-y-auto md:rounded-3xl md:p-8" >
        <ResponsiveDialogClose asChild><button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden" aria-label="Close release"><X size={18} /></button></ResponsiveDialogClose>
        <div className="grid gap-7 pt-3 md:grid-cols-[0.85fr_1.15fr] md:pt-0" data-lenis-prevent>
          <div className="mx-auto w-full max-w-[280px] md:max-w-none">
            <motion.div layoutId={coverId} className="overflow-hidden rounded-xl shadow-2xl" transition={{ type: "spring", stiffness: 230, damping: 26 }}>
              <Image src={release.cover} alt={`${release.title} cover artwork`} width={640} height={640} className="h-auto w-full" />
            </motion.div>
            <p className="mt-4 text-center text-xs text-muted-foreground">{release.released}</p>
          </div>
          <div className="min-w-0">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">yanaali / {release.kind}</p>
            <ResponsiveDialogTitle className="font-display text-2xl font-bold leading-[1.25] md:text-3xl">{release.title}</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="mt-4 text-sm">{release.year} · {release.tracks} tracks · {release.duration}</ResponsiveDialogDescription>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="mb-6 mt-6 inline-flex items-center gap-2 rounded-full bg-[#1db954] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#1ed760]"><SiSpotify size={19} />Open on Spotify<ArrowUpRight size={16} /></a>
            {playerLoaded ? (
              <iframe title={`Spotify player: ${release.title}`} src={`https://open.spotify.com/embed/album/${release.spotifyId}?utm_source=generator&theme=0`} width="100%" height="352" className="rounded-xl border-0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            ) : (
              <button type="button" onClick={() => setPlayerLoaded(true)} className="flex min-h-[180px] w-full flex-col items-center justify-center gap-3 rounded-xl border border-border bg-secondary/40 p-6 text-center transition-colors hover:bg-secondary">
                <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: `${release.accent}30`, color: release.accent }}><Play size={22} fill="currentColor" /></span>
                <span className="text-sm font-medium">Load Spotify player</span>
                <span className="text-xs text-muted-foreground">Listen here, or open the release in Spotify.</span>
              </button>
            )}
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

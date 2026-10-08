import Link from "next/link";
import { ArrowUpRight, AudioLines, BookOpen, Brain, Braces, CalendarDays, Code2, Cpu, GraduationCap, Landmark, MapPin, Music2, Workflow } from "lucide-react";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const courseIcons = [Braces, Cpu, Brain, Workflow];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="relative mx-auto min-h-screen max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader id="about" title="About" desc="Software, sound & curiosity" className="static mb-12" />
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="relative z-[2] grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-700 dark:text-cyan-300"><Code2 size={16} />Full stack</span>
            <span className="flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-700 dark:text-violet-300"><Brain size={16} />AI &amp; audio</span>
            <span className="flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-sm text-rose-700 dark:text-rose-300"><AudioLines size={16} />Music</span>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">{config.about}</p>
          <Link href="/side-b" className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-500/10 via-card to-indigo-500/10 p-6 transition-colors hover:border-fuchsia-400/60">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300"><Music2 size={28} /></span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-700 dark:text-fuchsia-300">Beyond the keyboard</p>
              <h3 className="mt-1 text-xl font-semibold">Side B · yanaali</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The music I release. Explore my albums and mixtape.</p>
            </div>
            <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-fuchsia-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/30 bg-card bg-gradient-to-br from-violet-500/15 via-card to-indigo-500/10 p-6 shadow-[0_20px_80px_-40px_rgba(139,92,246,0.5)] md:p-8">
          <span aria-hidden className="pointer-events-none absolute -right-3 -top-7 font-display text-[10rem] font-bold text-violet-400/10">W</span>
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/20 text-violet-700 dark:text-violet-300"><Landmark size={25} /></span>
              <span className="text-xs uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">My education</span>
            </div>
            <h3 className="text-2xl font-bold">{config.education.school}</h3>
            <p className="mt-3 flex items-start gap-2 text-base"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />{config.education.degree}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin size={15} className="text-violet-500" />{config.education.location}</span>
              <span className="flex items-center gap-2"><CalendarDays size={15} className="text-violet-500" />{config.education.graduation}</span>
            </div>
            <div className="my-6 h-px bg-gradient-to-r from-violet-400/30 to-transparent" />
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground"><BookOpen size={15} />What I&apos;m studying</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {config.education.coursework.map((course, index) => {
                const Icon = courseIcons[index] || BookOpen;
                return <div key={course} className="flex items-center gap-3 rounded-xl border border-violet-400/15 bg-background/60 p-3 text-xs leading-relaxed"><Icon className="h-4 w-4 shrink-0 text-violet-500 dark:text-violet-300" />{course}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

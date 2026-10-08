"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, KEYBOARD_SKILLS } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { useSceneStatus } from "@/lib/scene-health";

export default function SkillsSection() {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const showGrid = !ready || disable3D || sceneStatus !== "ready";
  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  return (
    <SectionWrapper id="skills" className={showGrid
      ? "flex min-h-screen w-full flex-col justify-center py-24"
      : "relative h-[110dvh] w-full md:h-[150dvh]"}>
      <SectionHeader id="skills" title="Tech Stack"
        desc={showGrid ? "Tools I build with" : "(hint: hover, tap, or press a key)"}
        className={showGrid ? "static mb-14" : undefined} />
      <ul className={showGrid ? "mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4" : "sr-only"}>
        {KEYBOARD_SKILLS.map(name => {
          const skill = SKILLS[name];
          const Icon = skill.icon;
          return (
            <li key={name} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/80 p-5">
              <Icon size={40} style={{ color: skill.color }} />
              <span className="text-sm">{skill.label}</span>
            </li>
          );
        })}
      </ul>
      <p className={showGrid
        ? "mx-auto mt-8 max-w-3xl px-6 text-center text-sm leading-relaxed text-muted-foreground"
        : "absolute inset-x-0 bottom-12 mx-auto max-w-3xl px-6 text-center text-sm leading-relaxed text-muted-foreground"}>
        Also: C, C#, Azure DevOps, CI/CD (TeamCity &amp; Bitbucket), NumPy, Librosa, SciPy, Qt, REST APIs, Framer Motion, Assembly, Windows Server, and Hyper-V.
      </p>
    </SectionWrapper>
  );
}

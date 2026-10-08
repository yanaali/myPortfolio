"use client";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="relative mx-auto min-h-screen max-w-7xl px-4 pb-24 pt-20">
      <SectionHeader id="projects" title="Projects" desc="A few things I've built" className="mb-[24rem]" />
      <div className="relative z-[2] mx-auto grid max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative aspect-[3/2] w-full max-w-[508px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-left shadow-lg transition-[border-color,box-shadow] hover:border-white/30 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {project.src && <ScrollingPreview src={project.src} alt={project.title} accent={project.accent} isHovered={isHovered} />}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030815] via-[#030815]/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 px-5 pb-5 pt-16 sm:px-6">
              <div className="text-xl font-semibold text-white sm:text-2xl">{project.title}</div>
              <p className="line-clamp-1 text-sm font-medium text-white/90 sm:text-base">{project.tagline}</p>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 min-w-0">
                <ResponsiveDialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  {project.title}
                </ResponsiveDialogTitle>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    Source
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                      Visit
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <ResponsiveDialogDescription className="mt-3">{project.description}</ResponsiveDialogDescription>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              {project.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.src} alt={`${project.title} interface`} className="mb-8 w-full rounded-xl border border-border" />
              )}
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Frontend
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Backend
                    </span>
                    <div className="max-w-full overflow-x-auto px-2 pb-3"><FloatingDock items={project.skills.backend} /></div>
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;

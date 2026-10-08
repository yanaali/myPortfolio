import type { ReactNode } from "react";
import { SKILLS, SkillNames } from "./constants";

export type Skill = { title: string; bg: string; fg: string; icon: ReactNode };
export type Project = {
  id: string; category: string; title: string; description: string;
  tagline: string; accent: string;
  src?: string; screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode; github?: string; live?: string;
};
const stack = (...names: SkillNames[]): Skill[] => names.map(name => {
  const skill = SKILLS[name];
  const Icon = skill.icon;
  return { title: skill.label, bg: "black", fg: "white", icon: <Icon /> };
});

const projects: Project[] = [
  {
    id: "career-compass", category: "Full-stack · AI", title: "Career Compass",
    description: "A career workspace for tracking applications, managing documents, and asking a source-grounded AI copilot.",
    tagline: "AI-powered career workspace", accent: "#f59e0b",
    src: "/assets/projects-screenshots/career-compass/landing.png",
    screenshots: [],
    github: "https://github.com/yanaali/Career-Compass",
    live: "https://careercompass.aaliyanm.dev/",
    skills: {
      frontend: stack(SkillNames.REACT, SkillNames.TS, SkillNames.TAILWIND),
      backend: stack(SkillNames.SPRING, SkillNames.PYTHON, SkillNames.POSTGRES, SkillNames.LANGCHAIN, SkillNames.AWS, SkillNames.DOCKER, SkillNames.TERRAFORM),
    },
    content: <p className="leading-relaxed text-muted-foreground">Career Compass brings job applications, career documents, and daily planning into one workspace. Its RAG-based Career Copilot retrieves relevant information from resumes, job descriptions, and project notes using embeddings and PostgreSQL/pgvector. Separate React, Spring Boot, and Python services run on AWS infrastructure defined with Terraform.</p>,
  },
  {
    id: "audio-decoded", category: "Audio · DSP", title: "audioDecoded",
    description: "An audio analysis app that detects BPM and musical key from uploaded tracks or microphone recordings.",
    tagline: "BPM and musical-key analysis", accent: "#f97316",
    src: "/assets/projects-screenshots/audio-decoded/landing.png",
    screenshots: [],
    github: "https://github.com/yanaali/audio-Decoded",
    live: "https://audiodecoded.aaliyanm.dev/",
    skills: {
      frontend: stack(SkillNames.HTML, SkillNames.CSS, SkillNames.JS),
      backend: stack(SkillNames.PYTHON, SkillNames.FASTAPI, SkillNames.POSTGRES, SkillNames.NUMPY),
    },
    content: <p className="leading-relaxed text-muted-foreground">audioDecoded combines a responsive drag-and-drop interface and live microphone recording with a Python/FastAPI audio analysis backend. Librosa, NumPy, and SciPy power tempo and musical-key estimation, while PostgreSQL stores upload metadata and analysis history.</p>,
  },
];
export default projects;

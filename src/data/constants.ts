import type { IconType } from "react-icons";
import { SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiSharp, SiReact, SiSpringboot, SiFastapi, SiNodedotjs, SiExpress, SiTailwindcss, SiPostgresql, SiDocker, SiTerraform, SiGit, SiGithub, SiLinux, SiHtml5, SiCss3, SiLangchain, SiOpenai, SiQt, SiNumpy } from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft, FaDatabase } from "react-icons/fa6";
import { VscAzureDevops, VscGitPullRequest } from "react-icons/vsc";

export enum SkillNames {
  PYTHON = "python", JAVA = "java", TS = "ts", JS = "js", CPP = "cpp", C = "c",
  CSHARP = "csharp", REACT = "react", SPRING = "spring", FASTAPI = "fastapi",
  NODEJS = "nodejs", EXPRESS = "express", HTML = "html", CSS = "css",
  TAILWIND = "tailwind", POSTGRES = "postgres", SQL = "sql", AWS = "aws",
  DOCKER = "docker", TERRAFORM = "terraform", GIT = "git", GITHUB = "github",
  AZURE = "azure", DEVOPS = "devops", CICD = "cicd", LINUX = "linux",
  LANGCHAIN = "langchain", OPENAI = "openai", QT = "qt", NUMPY = "numpy",
}
export type Skill = {
  id: number; name: SkillNames; label: string; shortDescription: string;
  color: string; icon: IconType;
};

const entries: [SkillNames, string, string, string, IconType][] = [
  [SkillNames.PYTHON, "Python", "AI services, FastAPI backends, and audio signal processing.", "#3776ab", SiPython],
  [SkillNames.JAVA, "Java", "Object-oriented programming and Spring Boot REST APIs.", "#e76f00", FaJava],
  [SkillNames.TS, "TypeScript", "Typed React applications and maintainable frontend code.", "#3178c6", SiTypescript],
  [SkillNames.JS, "JavaScript", "Interactive interfaces, browser audio, and web applications.", "#b59b00", SiJavascript],
  [SkillNames.CPP, "C++", "Modular desktop applications and object-oriented architecture.", "#00599c", SiCplusplus],
  [SkillNames.C, "C", "Systems programming, memory management, and core algorithms.", "#6879a0", SiC],
  [SkillNames.CSHARP, "C#", "Object-oriented programming and guided programming instruction.", "#8e44ad", SiSharp],
  [SkillNames.REACT, "React", "Responsive interfaces and enterprise micro-frontends.", "#087ea4", SiReact],
  [SkillNames.SPRING, "Spring Boot", "Secure Java APIs with validation and PostgreSQL persistence.", "#5b9e24", SiSpringboot],
  [SkillNames.FASTAPI, "FastAPI", "Python APIs for audio analysis and AI services.", "#009688", SiFastapi],
  [SkillNames.NODEJS, "Node.js", "JavaScript services and backend tooling.", "#539e43", SiNodedotjs],
  [SkillNames.EXPRESS, "Express", "REST endpoints and lightweight Node.js services.", "#64748b", SiExpress],
  [SkillNames.HTML, "HTML", "Semantic, accessible structure for web interfaces.", "#e34f26", SiHtml5],
  [SkillNames.CSS, "CSS / Sass", "Responsive layouts, theming, and polished interfaces.", "#1572b6", SiCss3],
  [SkillNames.TAILWIND, "Tailwind CSS", "Utility-based styling for responsive React applications.", "#0891b2", SiTailwindcss],
  [SkillNames.POSTGRES, "PostgreSQL", "Persistent application data and pgvector-powered retrieval.", "#4169e1", SiPostgresql],
  [SkillNames.SQL, "SQL", "Relational data modeling, queries, and application persistence.", "#457b9d", FaDatabase],
  [SkillNames.AWS, "AWS", "Cloud deployments with ECS, RDS, S3, Cognito, and CloudWatch.", "#d97706", FaAws],
  [SkillNames.DOCKER, "Docker", "Containerized web, Java, and Python services.", "#2496ed", SiDocker],
  [SkillNames.TERRAFORM, "Terraform", "Reproducible AWS infrastructure as code.", "#844fba", SiTerraform],
  [SkillNames.GIT, "Git", "Version control, code reviews, and collaborative delivery.", "#f05032", SiGit],
  [SkillNames.GITHUB, "GitHub", "Project repositories and collaborative development workflows.", "#64748b", SiGithub],
  [SkillNames.AZURE, "Azure", "Cloud fundamentals; Microsoft Azure Fundamentals certified.", "#0078d4", FaMicrosoft],
  [SkillNames.DEVOPS, "Azure DevOps", "Agile workflows and enterprise release delivery.", "#0078d7", VscAzureDevops],
  [SkillNames.CICD, "CI/CD", "Reliable releases with TeamCity, Bitbucket, and Azure DevOps.", "#2563eb", VscGitPullRequest],
  [SkillNames.LINUX, "Linux / Unix", "Development environments, command-line tools, and systems concepts.", "#b58a00", SiLinux],
  [SkillNames.LANGCHAIN, "LangChain", "Document chunking and source-grounded AI retrieval.", "#2f7660", SiLangchain],
  [SkillNames.OPENAI, "OpenAI API", "Embeddings and AI-assisted career guidance.", "#168570", SiOpenai],
  [SkillNames.QT, "Qt", "Cross-platform C++ desktop interfaces and study planning.", "#41a327", SiQt],
  [SkillNames.NUMPY, "NumPy / DSP", "Numerical audio analysis with NumPy, Librosa, and SciPy.", "#4d77cf", SiNumpy],
];
export const SKILLS = Object.fromEntries(entries.map(([name, label, shortDescription, color, icon], i) =>
  [name, { id: i + 1, name, label, shortDescription, color, icon }]
)) as Record<SkillNames, Skill>;

// Row order and key names match the personalized version of the original Spline scene.
export const KEYBOARD_SKILLS: SkillNames[] = [
  SkillNames.JS, SkillNames.TS, SkillNames.HTML, SkillNames.CSS, SkillNames.REACT, SkillNames.PYTHON,
  SkillNames.JAVA, SkillNames.TAILWIND, SkillNames.NODEJS, SkillNames.EXPRESS, SkillNames.POSTGRES, SkillNames.SPRING,
  SkillNames.GIT, SkillNames.GITHUB, SkillNames.FASTAPI, SkillNames.SQL, SkillNames.CPP, SkillNames.AZURE,
  SkillNames.LINUX, SkillNames.DOCKER, SkillNames.TERRAFORM, SkillNames.AWS, SkillNames.LANGCHAIN, SkillNames.OPENAI,
];

export type Experience = {
  id: number; startDate: string; endDate: string; title: string;
  company: string; description: string[]; skills: SkillNames[];
};
export const EXPERIENCE: Experience[] = [
  {
    id: 1, startDate: "May 2026", endDate: "Aug 2026",
    title: "Software Developer Intern", company: "Guidewire Software · Mississauga, ON",
    description: [
      "Shipped 50+ production defect fixes using React, TypeScript, HTML, CSS/Sass, and the Jutro design system.",
      "Delivered Agent Experience features, including Whatfix integration and Dockerized test deployments.",
      "Supported 15+ application and micro-frontend deployments with Bitbucket, TeamCity, and Azure DevOps.",
      "Designed an AI-assisted testing workflow that saved approximately 10 minutes per defect setup.",
    ],
    skills: [SkillNames.REACT, SkillNames.TS, SkillNames.CSS, SkillNames.DOCKER, SkillNames.DEVOPS, SkillNames.CICD],
  },
  {
    id: 2, startDate: "Nov 2024", endDate: "Oct 2025",
    title: "Programming Tutor", company: "EduXora · London, ON",
    description: [
      "Taught Java and C/C# to over 100 first-year students through tailored lessons, guided practice, and feedback.",
      "Helped improve average test scores by 20% and coursework grades by 25%.",
      "Led interactive problem-solving sessions that strengthened programming confidence and student engagement.",
    ],
    skills: [SkillNames.JAVA, SkillNames.C, SkillNames.CSHARP],
  },
];


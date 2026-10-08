const config = {
  title: "Aaliyan Muhammad | Software Developer",
  description: {
    long: "I'm Aaliyan Muhammad, a software developer and Computer Science student at Western University, graduating in 2027. I build full-stack applications, AI-powered tools, and audio analysis software with React, TypeScript, Java, Python, and AWS. Explore Career Compass and audioDecoded.",
    short:
      "Software developer and Western Computer Science student building full-stack applications, AI tools, and audio analysis software.",
  },
  keywords: [
    "Aaliyan",
    "portfolio",
    "software developer",
    "Western University",
    "web development",
    "full-stack development",
    "Career Compass",
    "audioDecoded",
    "Python",
    "Java",
    "Spring Boot",
    "AWS",
    "PostgreSQL",
    "TypeScript",
    "React",
    "FastAPI",
    "LangChain",
  ],
  author: "Aaliyan Muhammad",
  email: "aaliyanm219@gmail.com",
  schoolemail: "amuham45@uwo.ca",
  site: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  resume: "/Aaliyan_Muhammad_Resume.pdf",
  about: "I'm a software developer who enjoys turning practical problems into useful software. My work spans full-stack web applications, AI-powered career tools, audio signal processing, and desktop applications. At Guidewire, I shipped production fixes and features for enterprise insurance software; as a tutor, I helped students build confidence in programming.",
  education: {
    school: "Western University",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Expected 2027",
    location: "London, Ontario",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Introduction to AI", "Software Architecture"],
  },

  // for github stars button
  githubUsername: "yanaali",
  githubRepo: "myPortfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aaliyanmuhammad/",
    github: "https://github.com/yanaali",
  },
};
export { config };

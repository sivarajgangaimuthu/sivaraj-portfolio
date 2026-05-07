import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaNetworkWired,
  FaTools
} from "react-icons/fa";
import {
  SiExpress,
  SiGoogle,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss
} from "react-icons/si";
import { TbApi, TbBrain, TbRobot } from "react-icons/tb";

export const profile = {
  name: "Sivaraj G",
  role: "Full Stack Developer | Java Backend Developer | GenAI Enthusiast",
  location: "Tamil Nadu, India",
  email: "sivarajgangaimuthu@gmail.com",
  linkedin: "https://linkedin.com/in/sivarajg",
  github: "https://github.com/sivarajgangaimuthu",
  resume: "/resume/Sivaraj-G-Resume.pdf"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const navSectionIds = navItems.map((item) => item.id);

export const typingRoles = [
  "Full Stack Developer",
  "Java Backend Developer",
  "GenAI Enthusiast"
];

export const skillGroups = [
  {
    title: "Languages",
    icon: FaCode,
    accent: "from-cyanGlow/30 to-cyanGlow/5",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: FaPython },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt }
    ]
  },
  {
    title: "Backend",
    icon: FaServer,
    accent: "from-mintGlow/30 to-mintGlow/5",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: TbApi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Maven", icon: FaTools }
    ]
  },
  {
    title: "Frontend",
    icon: FaReact,
    accent: "from-roseGlow/30 to-roseGlow/5",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Axios", icon: TbApi },
      { name: "WebSocket", icon: FaNetworkWired }
    ]
  },
  {
    title: "Database",
    icon: FaDatabase,
    accent: "from-goldGlow/30 to-goldGlow/5",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB Atlas", icon: SiMongodb }
    ]
  },
  {
    title: "AI & Tools",
    icon: TbBrain,
    accent: "from-cyanGlow/20 via-roseGlow/15 to-goldGlow/10",
    items: [
      { name: "Gemini API", icon: SiGoogle },
      { name: "Google ADK", icon: TbRobot },
      { name: "LangChain", icon: TbBrain }
    ]
  }
];

export const projects = [
  {
    title: "Real-Time Collaborative Text Editor",
    tech: ["Node.js", "Socket.IO", "React.js", "MongoDB Atlas"],
    image: "/projects/collab-editor.svg",
    description:
      "Built a full-stack collaborative editor with real-time synchronization, live user presence, concurrent updates, and MongoDB persistence.",
    github: "https://github.com/sivarajgangaimuthu",
    live: "https://example.com"
  },
  {
    title: "Student Record Management System + AI Search",
    tech: ["Spring Boot", "MySQL", "Gemini API"],
    image: "/projects/student-ai.svg",
    description:
      "Built RESTful CRUD APIs with Spring Boot and integrated Gemini API for natural language student search.",
    github: "https://github.com/sivarajgangaimuthu",
    live: "https://example.com"
  },
  {
    title: "Multi-Domain Support Triage Agent",
    tech: ["Python", "Gemini API", "TF-IDF RAG", "scikit-learn"],
    image: "/projects/triage-agent.svg",
    description:
      "AI-powered support ticket classifier and responder with risk escalation engine for fraud and hacked-account detection.",
    github: "https://github.com/sivarajgangaimuthu",
    live: "https://example.com"
  }
];

export const achievements = [
  "HackerRank Orchestrate Hackathon 2026",
  "HCL GUVI Intern Hiring Hackathon 2026",
  "AWS AI/ML Scholarship (In Progress)"
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope }
];

export const stats = [
  { value: "2025", label: "ECE Graduate" },
  { value: "3+", label: "Full-stack projects" },
  { value: "AI", label: "Integrated apps" },
  { value: "7.51", label: "CGPA" }
];

export const education = {
  college: "R.M.K Engineering College",
  degree: "B.E Electronics and Communication Engineering",
  cgpa: "7.51"
};

export const contactMethods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/sivarajg", href: profile.linkedin },
  { label: "GitHub", value: "github.com/sivarajgangaimuthu", href: profile.github }
];

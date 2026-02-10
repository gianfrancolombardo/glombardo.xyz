import {
    Layers,
    Github,
    Linkedin,

    BrainCircuit,
    Server,
    Users,
    Database
} from "lucide-react";
import type { NavItem, Experience, Project, Service, SocialLink, Post } from "./types";

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "#hero" },
    { label: "Expertise", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Career", href: "#experience" },
    { label: "Insights", href: "#posts" },
    { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
    {
        title: "AI & Intelligent Agents",
        description: "Empowering engineering with AI. From LangChain agents to PyTorch CNN models that solve complex business problems.",
        icon: BrainCircuit,
    },
    {
        title: "Scalable Architecture",
        description: "Designing robust systems handling 100k+ daily transactions using Microservices, AWS, and Kubernetes.",
        icon: Server,
    },
    {
        title: "Technical Leadership",
        description: "Leading SDLC transformations and mentoring teams to reduce feature development time by up to 70%.",
        icon: Users,
    },
];

export const EXPERIENCE: Experience[] = [
    {
        id: "1",
        role: "Staff Software Engineer",
        company: "Ciclogreen",
        period: "2023 — Present",
        description: "Leading the AI transformation of the SDLC. Developed AI Agents for mobility analysis and modernized the monolithic backend to asynchronous microservices. Reduced development time by 70% through LLM integration.",
        technologies: ["Python", "LLM/LangChain", "PostGIS", "AWS", "Streamlit"],
    },
    {
        id: "2",
        role: "Senior Software Engineer",
        company: "Entain Group",
        period: "2014 — 2023",
        description: "Architected high-volume systems (100k tickets/day). Designed AI models for spam filtering (CNN) and demand forecasting (Prophet). Reduced deposit processing from 8m to 30s.",
        technologies: ["Django", "Kubernetes", "PyTorch", "Redis", "Celery"],
    },
    {
        id: "3",
        role: "Software Developer",
        company: "Marfrig Group",
        period: "2012 — 2014",
        description: "Designed ABAP modules for SAP and developed satellite systems in Angular/PHP for enterprise integrations, ensuring 100% compliance with new electronic invoicing regulations.",
        technologies: ["SAP/ABAP", "Angular", "PHP", "REST APIs"],
    },
    {
        id: "4",
        role: "Crawler Developer",
        company: "BPO Platform",
        period: "2011 — 2012",
        description: "Developed autonomous web scraping systems (Crawlers) for a vertical search engine, processing over 500,000 records daily.",
        technologies: ["PHP", "Web Scraping", "MySQL", "Linux"],
    },
    {
        id: "5",
        role: "Web Developer",
        company: "Optics Grandjeans & Quebracho",
        period: "2010 — 2011",
        description: "Development of corporate and B2B websites using PHP, WordPress, HTML, CSS, and JavaScript.",
        technologies: ["PHP", "WordPress", "JS", "HTML/CSS"],
    },
];

export const PROJECTS: Project[] = [
    {
        name: "ZeroType",
        desc: "A minimalist Push-to-Talk AI transcription tool for Windows that types what you speak in any application.",
        image: "/img/projects/zerotype.webp",
        url: "https://zerotype.glombardo.xyz/",
        post: null,
        tags: ["AI", "Transcription", "Productivity", "Electron"],
    },
    {
        name: "SaberUp",
        desc: "AI-powered audio micro-lessons providing personalized study plans for learning on the go.",
        image: "/img/projects/saberup.webp",
        url: "https://SaberUp.app",
        post: null,
        tags: ["AI", "Audio", "Education", "Productivity"],
    },
    {
        name: "Chat with DB",
        desc: "AI-powered chatbot that interacts with multiple databases using natural language.",
        image: "/img/projects/chat_with_db.webp",
        url: "https://github.com/gianfrancolombardo/chat-with-db",
        post: "https://www.linkedin.com/pulse/chat-db-decisiones-basadas-en-datos-trav%C3%A9s-de-natural-lombardo-yb4vf",
        tags: ["Data Driven", "Agents", "LLM", "LangChain"],
    },
    {
        name: "Free Headlines",
        desc: "AI-powered agent for detecting sexist and misogynistic bias in headlines.",
        image: "/img/projects/free_headlines.webp",
        url: "https://headline-equality.streamlit.app/",
        post: "https://www.linkedin.com/pulse/sexismo-en-los-medios-as%25C3%25AD-detecta-la-ia-lo-que-veces-pasa-lombardo-1b3of",
        tags: ["Social Impact", "Agents", "LLM", "LangChain"],
    },
    {
        name: "Ruta Sostenible",
        desc: "Calculate your carbon footprint while traveling and offset it.",
        image: "/img/projects/ruta_sostenible.webp",
        url: "https://ruta-sostenible.glombardo.xyz/",
        post: null,
        tags: ["Social Impact", "Carbon Footprint", "Angular", "Firebase"],
    },
    {
        name: "TuHuella NuestraHuella",
        desc: "Calculate how each of your actions affects your carbon footprint.",
        image: "/img/projects/tuhuella.webp",
        url: "https://tuhuella-nuestrahuella.glombardo.xyz/",
        post: null,
        tags: ["Social Impact", "Carbon Footprint", "Angular", "Firebase"],
    },
    {
        name: "Tribuntu.org",
        desc: "NGO that aims to provide a technological platform for receiving donations to other NGOs.",
        image: "/img/projects/tribuntu.webp",
        url: "https://tribuntu.org/",
        post: null,
        tags: ["Social Impact", "NGOs", "PHP", "Wordpress"],
    },
    {
        name: "Criaturas Magicas Reales",
        desc: "Project that merges generative AI to create photorealistic magical creatures from literary descriptions.",
        image: "/img/projects/criaturas.webp",
        url: "https://glombardo.notion.site/Criaturas-M-gicas-Reales-f4cc86fa985a4f29a4dd19a432c9df6a",
        post: null,
        tags: ["Experimental", "LLM", "Text-to-image", "LangChain"],
    },
    {
        name: "Fundamental Analysis with One Click",
        desc: "Platform for quickly and easily conducting fundamental analysis of companies.",
        image: "/img/projects/fundamental_analysis.webp",
        url: "https://fast-fundamental-analysis.web.app/",
        post: "https://www.linkedin.com/pulse/an%C3%A1lisis-fundamental-con-un-clic-gianfranco-lombardo/",
        tags: ["Investments", "Personal Finance", "Angular", "Firebase"],
    },
];

export const POSTS: Post[] = [
    {
        title: "Chat with DB: Data-driven decisions through natural language",
        image: "/img/posts/7.webp",
        url: "https://www.linkedin.com/pulse/chat-db-decisiones-basadas-en-datos-trav%C3%A9s-de-natural-lombardo-yb4vf",
        date: "2024-10-04",
    },
    {
        title: "Sexism in the Media: How AI Detects What Sometimes Goes Unnoticed",
        image: "/img/posts/6.webp",
        url: "https://www.linkedin.com/pulse/sexismo-en-los-medios-as%25C3%25AD-detecta-la-ia-lo-que-veces-pasa-lombardo-1b3of",
        date: "2024-09-26",
    },
    {
        title: "Agents: a new level of abstraction in programming",
        image: "/img/posts/5.webp",
        url: "https://www.linkedin.com/pulse/agents-nuevo-nivel-de-abstracci%2525C3%2525B3n-al-programar-gianfranco-lombardo",
        date: "2023-05-16",
    },
    {
        title: "Are you using ChatGPT correctly, though… 🤔 (Prompt engineering)",
        image: "/img/posts/4.webp",
        url: "https://www.linkedin.com/pulse/estas-usando-bien-chatgpt-aun-que-prompt-engineering-lombardo",
        date: "2023-05-02",
    },
    {
        title: "Fundamental analysis with a click",
        image: "/img/posts/3.webp",
        url: "https://www.linkedin.com/pulse/an%25C3%25A1lisis-fundamental-con-un-clic-gianfranco-lombardo",
        date: "2022-05-03",
    },
    {
        title: "3 simple steps to detect gender disparity",
        image: "/img/posts/2.webp",
        url: "https://www.linkedin.com/pulse/3-simples-pasos-para-detectar-disparidad-de-los-sexos-lombardo",
        date: "2021-07-30",
    },
    {
        title: "Didactic and pedagogical content?",
        image: "/img/posts/1.webp",
        url: "https://www.linkedin.com/pulse/1-es-rom%25C3%25A1ntico-gianfranco-lombardo",
        date: "2021-07-12",
    },
];

export const SOCIALS: SocialLink[] = [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/gianfranco-lombardo/", icon: Linkedin },
    { platform: "GitHub", url: "https://github.com/gianfrancolombardo", icon: Github },

];

export const SKILLS_GRID = [
    { name: "AI & Data", icon: BrainCircuit, items: ["Python", "LangChain", "PyTorch", "LLMs", "Streamlit", "Pandas"] },
    { name: "Backend & Cloud", icon: Database, items: ["Django", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Celery"] },
    { name: "Architecture", icon: Layers, items: ["Microservices", "System Design", "CI/CD", "Docker", "REST APIs"] },
];

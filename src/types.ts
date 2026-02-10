import type { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface Project {
    name: string;
    desc: string;
    image: string;
    url: string;
    post: string | null;
    tags: string[];
}

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: LucideIcon;
}

export interface Post {
    title: string;
    image: string;
    url: string;
    date: string;
    readTime?: string;
}

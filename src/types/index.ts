export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: SkillItem[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

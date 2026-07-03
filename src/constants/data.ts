import type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  Certification,
  ServiceItem,
  Achievement,
  SocialLink,
} from "@/types";

export const SITE = {
  name: "Shubham Gade",
  role: "Java Full Stack Developer",
  tagline: "I build reliable, well-tested applications with Java, Spring Boot, and modern web tooling.",
  email: "shubhampgade2003@gmail.com",
  location: "Pune, Maharashtra, India",
  resumeUrl: "",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Shubham-Gade1303", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/shubham-gade-a79905256", icon: "Linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/Shubham-Gade1303/", icon: "LeetCode" },
  { name: "Email", url: "mailto:shubhampgade2003@gmail.com", icon: "Mail" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 72 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Spring MVC", level: 80 },
      { name: "Spring Security", level: 75 },
      { name: "REST API", level: 88 },
      { name: "JWT Authentication", level: 78 },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 72 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Eclipse", level: 80 },
      { name: "IntelliJ IDEA", level: 82 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "Shop-Management-System",
    name: "Shop Management System",
    tagline: "End-to-end shop management for local tailoring businesses",
    description:
      "A full-stack application that helps tailoring shops manage customers, measurements, and billing in one place, replacing paper registers with a searchable digital workflow.",
    image: "/projects/tailor-management.svg",
    techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Spring Security"],
    features: [
      "Customer management",
      "Measurement records",
      "Bill generation",
      "Role-based authentication",
      "Admin dashboard",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
    featured: true,
  },
  {
    slug: "employee-directory",
    name: "Employee Directory",
    tagline: "Searchable directory with department-level access control",
    description:
      "A directory application for internal company use, with fast search, filters by department, and CRUD operations backed by a REST API.",
    image: "/projects/employee-directory.svg",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
    features: [
      "Employee CRUD operations",
      "Department-wise filtering",
      "Search with pagination",
      "REST API integration",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    slug: "student-management-system",
    name: "Student Management System",
    tagline: "Academic records and attendance, simplified",
    description:
      "A system for institutions to manage student records, attendance, and grades, with a clean dashboard for teachers and administrators.",
    image: "/projects/student-management.svg",
    techStack: ["Java", "Spring MVC", "Hibernate", "MySQL"],
    features: [
      "Student record management",
      "Attendance tracking",
      "Grade book",
      "Role-based dashboards",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    slug: "ecommerce-website",
    name: "E-Commerce Website",
    tagline: "Full shopping experience from catalog to checkout",
    description:
      "A complete e-commerce platform with product catalog, cart, and order flow, backed by a Spring Boot REST API and JWT-secured checkout.",
    image: "/projects/ecommerce.svg",
    techStack: ["Java", "Spring Boot", "React", "JWT", "MySQL"],
    features: [
      "Product catalog & search",
      "Cart & checkout flow",
      "JWT authentication",
      "Order history",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
    featured: true,
  },
  {
    slug: "banking-application",
    name: "Banking Application",
    tagline: "Core banking operations with secure transactions",
    description:
      "A simulated banking application supporting account management, fund transfers, and transaction history with strong validation and security practices.",
    image: "/projects/banking.svg",
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    features: [
      "Account management",
      "Secure fund transfers",
      "Transaction history",
      "Input validation & audit logs",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    organization: "CreazeOne Software, Pune",
    period: "Apr 2025 – Oct 2025",
    location: "Pune, India",
    points: [
      "Worked on developing and maintaining web applications using Java and related technologies.",
      "Collaborated with team members to implement new features and resolve bugs.",
      "Improved application performance and code quality through testing and debugging.",
      "Gained hands-on experience with the software development lifecycle and version control tools.",
    ],
  },
  {
    role: "Home Price Prediction System",
    organization: "Academic Project",
    period: "2025",
    location: "Maharashtra, India",
    points: [
      "Developed a web-based application to estimate residential property prices based on user-provided inputs.",
      "Built the backend using Java Servlets and JSP, with JDBC for database connectivity.",
      "Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented data processing and prediction logic to generate accurate price estimates.",
      "Followed MVC architecture to ensure maintainable and scalable application design.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "DBATU University",
    period: "Jan 2021 – Jun 2025",
    score: "CGPA: 7.42",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    period: "May 2020 – Feb 2021",
    score: "88.33%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    period: "Jun 2018 – Mar 2019",
    score: "79.20%",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Java Programming Certification", issuer: "Online Learning Platform", year: "2024" },
  { name: "Spring Boot & REST APIs", issuer: "Online Learning Platform", year: "2024" },
  { name: "SQL & Database Fundamentals", issuer: "Online Learning Platform", year: "2023" },
  { name: "React & Modern JavaScript", issuer: "Online Learning Platform", year: "2025" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Java Development",
    description: "Clean, maintainable backend logic built on core Java and OOP principles.",
    icon: "Coffee",
  },
  {
    title: "Spring Boot Development",
    description: "Production-ready services with Spring Boot, Spring MVC, and Spring Security.",
    icon: "Cog",
  },
  {
    title: "REST API Development",
    description: "Well-documented, secure REST APIs with JWT authentication.",
    icon: "Plug",
  },
  {
    title: "Frontend Development",
    description: "Responsive interfaces with React, TypeScript, and Tailwind CSS.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Database Design",
    description: "Normalized schemas and efficient queries across MySQL and PostgreSQL.",
    icon: "Database",
  },
  {
    title: "Responsive Websites",
    description: "Interfaces that work cleanly across mobile, tablet, and desktop.",
    icon: "Smartphone",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { label: "Projects built", value: 12, suffix: "+" },
  { label: "Java problems solved", value: 300, suffix: "+" },
  { label: "Technologies used", value: 18, suffix: "+" },
  { label: "Hours of focused practice", value: 800, suffix: "+" },
];

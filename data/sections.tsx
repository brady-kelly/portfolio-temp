import { Award, Briefcase, Globe, GraduationCap, User } from "lucide-react";

export const cvSections = [
  {
    title: "Basic Details",
    description: "Personal information and contact details",
    href: "/cv-info/basics",
    icon: User,
    color: "bg-slate-50 hover:bg-slate-100",
  },
  {
    title: "Work Experience",
    description: "Professional career history and achievements",
    href: "/cv-info/experience",
    icon: Briefcase,
    color: "bg-emerald-50 hover:bg-emerald-100",
  },
  {
    title: "Professional Skills",
    description: "Technical expertise and competencies",
    href: "/cv-info/skills",
    icon: Award,
    color: "bg-slate-50 hover:bg-slate-100",
  },
  {
    title: "Education History",
    description: "Academic background and qualifications",
    href: "/cv-info/education",
    icon: GraduationCap,
    color: "bg-emerald-50 hover:bg-emerald-100",
  },
  {
    title: "Languages & Interests",
    description: "Language skills and personal interests",
    href: "/cv-info/languages-interests",
    icon: Globe,
    color: "bg-emerald-50 hover:bg-emerald-100",
  },
]
export interface Language {
  language: string;
  proficiency: string;
  level: number;
  description?: string;
}

export interface Interest {
  category: string;
  iconName?: string;
  attributes: string[];
}

export interface Skill {
  name: string;
  level: string;
  years: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  colorClasses: "bg-emerald-50 border-emerald-200";
  skills: Skill[];
}

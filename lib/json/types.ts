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

export type Position = {
  id: string;
  hidden: boolean;
  company: string;
  position: string;
  location: string;
  period: string;
  website: {
    url: string;
    label: string;
  };
  description: string;
  roles: string[];
  technologies?: string[];
};

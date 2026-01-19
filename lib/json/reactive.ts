import { UnsafeBasics } from "../types/unsafe/unsafe-basics";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CvRoot {
  basics: UnsafeBasics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  awards: Award[];
  publications: Publication[];
  skills: SkillEx[];
  languages: LanguageEx[];
  interests: InterestEx[];
  references: Reference[];
  projects: Project[];
  meta: Meta;
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Basics {
  name: string;
  label: string;
  picture: string;
  dateOfBirth: Date;
  nationality: string;
  workAuth: string;
  email: string;
  phone: string;
  website: string;
  availability: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  country: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface EducationEx {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}

export interface Education {
  institution: string;
  url?: string;
  area?: string;
  startDate: string;
  endDate: string;
  courses: string[];
}

export interface AdditionalEducation {
  title: string;
  provider: string;
  year: string;
  type: string;
}

export interface InterestEx {
  name: string;
  keywords: string[];
}

export interface LanguageEx {
  language: string;
  fluency: string;
}

export interface Meta {
  canonical: string;
  version: string;
  lastModified: string;
}

export interface Project {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  highlights: string[];
  url: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  summary: string;
}

export interface Reference {
  name: string;
  reference?: string;
  description?: string;
  highlights?: any[];
  keywords?: any[];
  startDate?: string;
  endDate?: string;
  website?: string;
  roles?: any[];
  entity?: string;
  type?: string;
}

export interface SkillEx {
  name: string;
  level: string;
  keywords: string[];
}

export interface Volunteer {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Work {
  company: string;
  location: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  product: string;
  tasks: string[];
  technologies: string[];
  highlights: string[];
  reasonForLeaving: string;
}

import { Award, Education, Volunteer, Work } from "@/lib/json/reactive";
import { UnsafeBasics } from "@/lib/types/unsafe/unsafe-basics";
import { Certificate } from "@/lib/types/unsafe/certificate";
import { Interest } from "@/lib/types/unsafe/interest";
import { Language } from "@/lib/types/unsafe/language";
import { Project } from "@/lib/types/unsafe/project";
import { Publication } from "@/lib/types/unsafe/publication";
import { Reference } from "@/lib/types/unsafe/reference";
import { Skill } from "@/lib/types/unsafe/skill";

/**
 * A resume as defined by JsonResume but parsed to make it safe to use in this app.
 * @remarks The JsonResume schema leaves everything optional.
 * This type ensures some properties required by components in this app are set.
 * @see {@link https://jsonresume.org | JsonResume}
 */
export type SafeResume = {
  basics: UnsafeBasics;
  work?: Work[];
  volunteer?: Volunteer[];
  education?: Education[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
};

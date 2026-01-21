import { Award } from "./award";
import { UnsafeBasics } from "./unsafe-basics";
import { Certificate } from "./certificate";
import { Education } from "./education";
import { Interest } from "./interest";
import { Language } from "./language";
import { Project } from "./project";
import { Publication } from "./publication";
import { Reference } from "./reference";
import { Skill } from "./skill";
import { Volunteer } from "./volunteer";
import { UnsafeExperience } from "./unsafe-experience";

/**
 * A resume as defined by JsonResume.
 * @remarks Used for import/export with JsonResume.
 * @see {@link https://jsonresume.org | JsonResume}
 */
export type UnsafeResume = {
  basics?: UnsafeBasics;
  work?: UnsafeExperience[];
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

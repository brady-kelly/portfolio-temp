/**
 * Describes a professional's work experince with one employer.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type UnsafeExperience = {
  /**
   * e.g. Facebook
   */
  company?: string;
  /**
   * e.g. Menlo Park, CA
   */
  location?: string;
  /**
   * e.g. Social Media Company
   */
  description?: string;
  /**
   * e.g. Software Engineer
   */
  position?: string;
  /**
   * e.g. http://facebook.example.com
   */
  url?: string;
  startDate?: string;
  endDate?: string;
  /**
   * Give an overview of your responsibilities at the company
   */
  summary?: string;
  /**
   * Specify multiple accomplishments
   */
  highlights?: string[];
  reasonForLeaving?: string;
  technologies: string[];
};

/**
 * Describes education received by a professional.
 * @remarks Normally only used for tertiary education.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Education = {
  /**
   * e.g. Massachusetts Institute of Technology
   */
  institution?: string;
  /**
   * e.g. http://facebook.example.com
   */
  url?: string;
  /**
   * e.g. Arts
   */
  area?: string;
  /**
   * e.g. Bachelor
   */
  studyType?: string;
  startDate?: string;
  endDate?: string;
  /**
   * grade point average, e.g. 3.67/4.0
   */
  score?: string;
  /**
   * List notable courses/subjects
   */
  courses?: string[];
};

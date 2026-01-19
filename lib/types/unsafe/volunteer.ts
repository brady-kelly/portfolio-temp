/**
 * Describes service a professional has volunteered for during their career.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Volunteer = {
  /**
   * e.g. Facebook
   */
  organization?: string;
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
   * Specify accomplishments and achievements
   */
  highlights?: string[];
};

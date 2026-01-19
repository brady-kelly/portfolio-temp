/**
 * Descrines a personal interest.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Interest = {
  /**
   * e.g. Philosophy
   */
  name?: string;
  keywords?: string[];
  [k: string]: unknown;
};

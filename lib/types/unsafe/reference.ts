/**
 * Specifies a career reference.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Reference = {
  /**
   * e.g. Timothy Cook
   */
  name?: string;
  /**
   * e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.
   */
  reference?: string;
};

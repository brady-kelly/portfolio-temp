/**
 * Describes a professional skill.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Skill = {
  /**
   * e.g. Web Development
   */
  name?: string;
  /**
   * e.g. Master
   */
  level?: string;
  /**
   * List some keywords pertaining to this skill
   */
  keywords?: string[];
};

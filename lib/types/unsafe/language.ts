/**
 * Specifies a language spoken.s
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Language = {
  /**
   * e.g. English, Spanish
   */
  language?: string;
  /**
   * e.g. Fluent, Beginner
   */
  fluency?: string;
  // TODO: Map language fluency to level as number, for UI graphic.
  level?: number;
};

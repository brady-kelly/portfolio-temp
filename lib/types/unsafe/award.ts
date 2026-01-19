/**
 * Describes an award received by a professional during their career.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Award = {
  /**
   * e.g. One of the 100 greatest minds of the century
   */
  title?: string;
  date?: string;
  /**
   * e.g. Time Magazine
   */
  awarder?: string;
  /**
   * e.g. Received for my work with Quantum Physics
   */
  summary?: string;
  [k: string]: unknown;
};

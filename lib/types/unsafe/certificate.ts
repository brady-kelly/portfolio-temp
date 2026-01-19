/**
 * Describes a certificate received by a professional during their career.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type Certificate = {
  /**
   * e.g. Certified Kubernetes Administrator
   */
  name?: string;
  date?: string;
  /**
   * e.g. http://example.com
   */
  url?: string;
  /**
   * e.g. CNCF
   */
  issuer?: string;
  [k: string]: unknown;
};

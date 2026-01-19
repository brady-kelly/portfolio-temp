/**
 * Describes a professional's address.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type UnsafeLocation = {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
  /**
   * Additional props not on default JsonResume
   */
  countryName?: string;
};

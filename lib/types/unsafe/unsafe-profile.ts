/**
 * Describes a professional's social network profile.
 * @remarks Used for import/export with JsonResume.
 * @see {@link Resume}
 */
export type UnsafeProfile = {
  /**
   * e.g. Facebook or Twitter
   */
  network?: string;
  /**
   * e.g. neutralthoughts
   */
  username?: string;
  /**
   * e.g. http://twitter.example.com/neutralthoughts
   */
  url?: string;
};

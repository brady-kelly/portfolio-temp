import { UnsafeProfile } from "./unsafe-profile";
import { UnsafeLocation } from "./unsafe-location";

export type UnsafeBasics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location: UnsafeLocation;
  profiles: UnsafeProfile[];
  dateOfBirth?: string;
  nationality?: string;
  workAuth?: string;
  availability: string;
};

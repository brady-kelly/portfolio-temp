import { Profile } from "./unsafe-profile";
import { Location } from "./unsafe-location";

export type UnsafeBasics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: Location;
  profiles?: Profile[];
  dateOfBirth?: string;
  nationality?: string;
  workAuth?: string;
};

import { Profile } from "@/lib/resume/basics/types";
import { Location } from "@/lib/resume/basics/types";
import { UnsafeLocation } from "./unsafe-location";
import { UnsafeProfile } from "./unsafe-profile";

export type UnsafeBasics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: UnsafeLocation;
  profiles?: UnsafeProfile[];
  dateOfBirth?: string;
  nationality?: string;
  workAuth?: string;
  availability?: string;
};

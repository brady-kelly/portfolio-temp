import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Location } from "@/lib/resume/basics/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function skillCatColour(colour: string): string {
  return `bg-${colour}-50 border-${colour}-200`;
}

export function getAddressLine(location: Location): string {
  return `${location.address}, ${location.city}, ${location.postalCode}, ${location.region}, ${location.countryName}`;
}

export function formatDate(dateString: string, long?: boolean) {
  if (dateString === "Present") return "Present";
  const date = new Date(dateString);
  if (long) {
    return date.toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("en-ZA", { year: "numeric", month: "short" });
}

// TODO: Fix horrible name. Make overloaded method in formatting class.
export function formatDateEx(date: Date, long?: boolean): string {
  return formatDate(date.toString(), long);
}

export function getInitials(name: string): string {
  return name
    .split(" ") // Split into parts by space
    .filter((part) => part.length > 0) // Remove empty parts (e.g., from double spaces)
    .map((part) => part[0]) // Take the first character of each word
    .join("") // Join them into a single string
    .toUpperCase(); // Standardize to uppercase
}

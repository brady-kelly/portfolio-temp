import type { Prisma } from "@/generated/prisma/client";

export type UserWithSkills = Prisma.UserGetPayload<{
  include: {
    skillCategories: {
      include: { skills: true };
    };
  };
}>;

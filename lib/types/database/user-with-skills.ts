import type { Prisma } from "@/generated/prisma/client";

export type UserWithCategoriesAndSkills = Prisma.UserGetPayload<{
  include: {
    skillCategories: {
      include: { skills: true };
    };
  };
}>;

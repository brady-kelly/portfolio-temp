import type { Prisma } from "@/generated/prisma/client";

export type SkillsCategoryWithSkills = Prisma.SkillCategoryGetPayload<{
  include: { skills: true };
}>;

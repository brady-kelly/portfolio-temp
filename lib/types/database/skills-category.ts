import type { Prisma } from "@/generated/prisma/client";

export type SkillsGroup = Prisma.SkillCategoryGetPayload<{
  include: { skills: true };
}>;

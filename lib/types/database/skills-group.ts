import type { Prisma } from "@/generated/prisma/client";

export type SkillsGroup = Prisma.SkillGroupGetPayload<{
  include: { skills: true };
}>;

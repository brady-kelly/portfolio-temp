"use server";

import { prisma } from "../prisma";
import type { SkillsGroup } from "../types/database/skills-group";

export async function readUserSkills(email: string): Promise<SkillsGroup[]> {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      skillGroups: {
        include: {
          skills: true,
        },
      },
    },
  });
  if (user) {
    return user.skillGroups as SkillsGroup[];
  } else {
    return [];
  }
}

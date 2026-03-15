"use server";

import { prisma } from "../prisma";
import type { SkillsGroup } from "../types/database/skills-group";

export async function readUserSkills(email: string): Promise<SkillsGroup[]> {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      skillCategories: {
        include: {
          skills: true,
        },
      },
    },
  });
  if (user) {
    return user.skillCategories as SkillsGroup[];
  } else {
    return [];
  }
}

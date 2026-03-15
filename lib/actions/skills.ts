"use server";

import { prisma } from "../prisma";
import type { SkillsCategoryWithSkills } from "../types/database/skills-category-with-skills";

export async function readUserSkills(
  email: string,
): Promise<SkillsCategoryWithSkills[]> {
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
    return user.skillCategories as SkillsCategoryWithSkills[];
  } else {
    return [];
  }
}

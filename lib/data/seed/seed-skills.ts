import { skillGroups } from "@/data/skills";
import { prisma } from "@/lib/prisma";

export async function seedUserSkillCats(userId: number) {
  const del = await prisma.skillGroup.deleteMany({
    where: {
      userId: userId,
    },
  });

  for (const group of skillGroups) {
    const newGroup = await prisma.skillGroup.create({
      data: {
        userId: userId,
        title: group.title,
        iconName: group.iconName,
        colourClasses: group.colorClasses,
        skills: {
          create: group.skills.map((skill) => ({
            name: skill.name,
            level: skill.level,
            years: skill.years.toString(),
          })),
        },
      },
    });
    console.log("Created group:", newGroup);
  }
}

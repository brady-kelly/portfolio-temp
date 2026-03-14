import { skillCategories } from "@/data/skills";
import { prisma } from "@/lib/prisma";

export async function seedUserSkillCats(userId: number) {
  const del = await prisma.skillCategory.deleteMany({
    where: {
      userId: userId,
    },
  });

  for (const cat of skillCategories) {
    const newCat = await prisma.skillCategory.create({
      data: {
        userId: userId,
        title: cat.title,
        iconName: cat.iconName,
        colourClasses: cat.colorClasses,
        skills: {
          create: cat.skills.map((skill) => ({
            name: skill.name,
            level: skill.level,
            years: skill.years.toString(),
          })),
        },
      },
    });
    console.log("Created cat:", newCat);
  }
}

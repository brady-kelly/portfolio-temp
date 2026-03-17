import { positionsData } from "@/data/positions";
import { prisma } from "@/lib/prisma";

export async function seedUserPositions(userId: number) {
  await prisma.position.deleteMany({
    where: {
      userId: userId,
    },
  });

  for (const position of positionsData) {
    const newPosition = await prisma.position.create({
      data: {
        userId: userId,
        company: position.company,
        location: position.location,
        position: position.position,
        description: position.description,
        period: position.period,
        websiteUrl: position.website.url,
        websiteLabel: position.website.label,
      },
    });
    console.log("Created position:", newPosition);
  }
}

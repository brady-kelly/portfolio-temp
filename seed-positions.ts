import { seedUserPositions } from "./lib/data/seed/seed-positions";
import { prisma } from "./lib/prisma";

async function main() {
  const existUser = await prisma.user.findUnique({
    where: { email: "brady@prisma.io" },
  });

  if (!existUser) {
    return;
  }

  const cats = await seedUserPositions(existUser.id);
  console.log(cats);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

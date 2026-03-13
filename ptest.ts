import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      skillCategories: {
        create: {
          title: "Backend Development",
          iconName: "database",
          colourClasses: "bg-emerald-50 border-emerald-200",
        },
      },
    },
  });
  console.log("Created user:", user);

  const allUsers = await prisma.user.findMany({
    include: {
      skillCategories: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
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

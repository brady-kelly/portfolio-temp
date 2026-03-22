import { prisma } from "./lib/prisma";

async function main() {
  let existUser = await prisma.user.findUnique({
    where: { email: "brady@prisma.io" },
  });

  if (!existUser) {
    existUser = await prisma.user.create({
      data: {
        name: "Brady",
        email: "brady@prisma.io",
      },
    });
    console.log("Created user:", existUser);
  }

  // const cats = await seedUserWithSkills(existUser.id);
  // console.log(cats);
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

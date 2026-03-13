import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "prisma/config";

//const connectionString = `${process.env.DATABASE_URL}`;
const connectionString = env("DIRECT_DATABASE_URL");
console.log(`CONN: ${connectionString}`);

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

// TODO: try get accelerate working.
// import { withAccelerate } from "@prisma/extension-accelerate";

// const prismaA = new PrismaClient({
//   accelerateUrl: process.env.DATABASE_URL,
// }).$extends(withAccelerate());

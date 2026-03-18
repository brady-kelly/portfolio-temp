import type { Prisma } from "@/generated/prisma/client";

export type UserWithStuff = Prisma.UserGetPayload<{
  include: {
    skillGroups: {
      include: { skills: true };
    };
    positions: true;
  };
}>;

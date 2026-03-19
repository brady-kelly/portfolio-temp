"use server";

import { prisma } from "../prisma";
import type { Position } from "../types/database/position";

export async function readUserPositions(email: string): Promise<Position[]> {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      positions: true,
    },
  });
  if (user) {
    return user.positions as Position[];
  } else {
    return [];
  }
}

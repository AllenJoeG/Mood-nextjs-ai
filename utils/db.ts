import { PrismaClient } from "@prisma/client";

//Typescript coercing a type by converting it to unknown then to what you want
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

//Checks for prisma instance
export const prisma = 
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
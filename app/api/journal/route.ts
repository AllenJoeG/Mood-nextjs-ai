//must be called route to route 'api/journal'

import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async () => {
  const user = await getUserByClerkID()

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'hardcoded journal deets',
    },
  })
  
  return NextResponse.json({data: entry})
  
}
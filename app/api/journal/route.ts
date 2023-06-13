//must be called route to route 'api/journal'

import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {
  const user = await getUserByClerkID()

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'hardcoded journal deets',
    },
  })
  // Revalidates/hydrates the path and refreshes new stuff when cards changes
  revalidatePath('/journal')
  
  return NextResponse.json({data: entry})
  
}
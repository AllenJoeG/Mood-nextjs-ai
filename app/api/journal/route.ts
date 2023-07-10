//must be called route to route 'api/journal'
import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
// import { revalidatePath } from "next/cache"
import { update } from "@/utils/actions"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  const user = await getUserByClerkID()
  const data = await request.json()

  const entry = await prisma.journalEntry.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      content: data.content,
      analysis: {
        create: {
          mood: 'Neutral',
          subject: 'None',
          negative: false,
          summary: 'None',
          sentimentScore: 0,
          color: '#0101fe',
          userId: user.id,
        },
      },
    },
  })

    // const analysis = await analyze(entry.content)
    
    // await prisma.analysis.create({
    //   data: {
    //     userId: user.id,
    //     entryId: entry.id,
    //     ...analysis
    //   },
    // })

  // Revalidates/hydrates the path and refreshes new stuff when cards changes
  update(['/journal'])

  return NextResponse.json({data: entry})
  
}
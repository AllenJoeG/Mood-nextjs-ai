// could PATCH or PUT
// expectation of PATCH is an update but not a complete override
import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"
import { update } from '@/utils/actions'



export const DELETE = async (request: Request, { params }) => {
  const user = await getUserByClerkID()

  await prisma.journalEntry.delete({
    where: {
      userId_id: {
        id: params.id,
        userId: user.id,
      },
    },
  })

  update(['/journal'])

  return NextResponse.json({ data: { id: params.id } })
}

// PUT replaces the whole thing with the new state
export const PATCH = async (request: Request, { params }) => {
  const { updates } = await request.json()
  const user = await getUserByClerkID()

  const entry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        id: params.id,
        userId: user.id,
      },
    },
    data: updates,
  })

  const analysis = await analyze(entry)
  const savedAnalysis = await prisma.analysis.upsert({
    where: {
      entryId: entry.id,
    },
    update: { ...analysis },
    create: {
      entryId: entry.id,
      userId: user.id,
      ...analysis,
    },
  })

  update(['/journal'])

  return NextResponse.json({ data: { ...entry, analysis: savedAnalysis } })
}
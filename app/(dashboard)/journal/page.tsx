import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"


//This page will fetch all journals by date, organizing them, and contain new journal button & functionality

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  console.log('entries ', entries)

  return(
    <div>
      journal goes here
    </div>
  )
}

export default JournalPage
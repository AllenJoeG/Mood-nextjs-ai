import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Link from "next/link"

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

  return(
    <div>
      <h2 className='text-3xl mb-8'>Journal</h2>
      <div className='grid grid-cols-3 gap-4'>
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
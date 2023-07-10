import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Link from "next/link"
import Question from '@/components/Question'

//This page will fetch all journals by date, organizing them, and 
// contain new journal button & functionality

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return(
    <div>
      <h2 className='text-3xl mb-8 bg-slate-100'>Journal</h2>
      <div className="">
        <Question />
      </div>

      <div className='pl-4 pr-4 grid grid-cols-4 gap-4 bg-gray-100'>
        <NewEntryCard />
        {entries.map((entry) => (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`} >
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
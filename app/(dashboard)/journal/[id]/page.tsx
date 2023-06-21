import Editor from "@/components/Editor"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      // compound index, see prisma schema JournalEntry @@unique compound index
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)

  return (
    <div className="h-full w-full">
      
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>
    
    </div>
  )
}

export default EntryPage
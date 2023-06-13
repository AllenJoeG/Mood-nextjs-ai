import Editor from "@/components/Editor"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      id,
      
    },
  })
}

const EntryPage = ({ params }) => {
  return <div>
    <Editor />
  </div>
}

export default EntryPage
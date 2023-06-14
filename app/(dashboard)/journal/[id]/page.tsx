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
      }
      
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)

  //placeholder hardcoded data to be replaced
  const analysisData = [
    {name: 'Summary', value: ''},
    {name: 'Subject', value: ''},
    {name: 'Mood', value: ''},
    {name: 'Negative', value: ''},
  ]

  return (
    <div className="h-full w-full grid grid-cols-3">
      
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>

      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
          
        </div>

        <div>
            <ul>
              {analysisData.map(item=>(
                <li key={item.name} className='px-2 py-4 flex items-center justify-between border-b border-t border-black/10'>
                  <span className='text-lg font-semibold'>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

      </div>
    
    </div>
  )
}

export default EntryPage
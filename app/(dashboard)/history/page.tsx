import HistoryChart from "@/components/HistoryChart"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getData = async () => {
  const user = await getUserByClerkID()
  //Fetch analysis
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc'
    },
  })
  const total = analyses.reduce((acc, curr) => {
                  return acc + curr.sentimentScore
                }, 0)

  const average = total / analyses.length

  return { analyses, average }
}

const History = async () => {
  const { average, analyses } = await getData()
  //console.log("History page looking at analyses: ", analyses)

  return (
    <div className="px-6 py-8 w-full h-full">
      <div className="text-2xl mb-4">
        {`Average Vector Database Sentiment Value: ${average}`}
      </div>
      <div className="w-full h-full">
        <HistoryChart data={analyses}/>
      </div>
    </div>
  )
}

export default History
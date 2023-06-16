'use client'
import { useState } from "react"

const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  const [analysis, setAnalysis] = useState(entry.analysis)

  console.log(entry)
    // const { mood, summary, subject, color, negative } = analysis
  // const analysisData = [
  //   {name: 'Summary', value: summary},
  //   {name: 'Subject', value: subject},
  //   {name: 'Mood', value: mood},
  //   {name: 'Negative', value: negative ? 'True' : 'False' },
  // ]

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">
        {/* {entry.analysis.summary} */}
      </div>
      <div className="px-4 py-4 sm:px-6">mood
        {/* {entry.analysis.mood} */}
      </div>
    </div>
  )
}
export default EntryCard
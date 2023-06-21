'use client'
import { useState } from "react"

const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  const [analysis, setAnalysis] = useState(entry.analysis)

  console.log("EntryCard looking at entry: ", entry)
    // const { mood, summary, subject, color, negative } = analysis
  // const analysisData = [
  //   {name: 'Summary', value: summary},
  //   {name: 'Subject', value: subject},
  //   {name: 'Mood', value: mood},
  //   {name: 'Negative', value: negative ? 'True' : 'False' },
  // ]

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-slate-100 hover:bg-slate-200 shadow-xl">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">
        <p>{entry.analysis.summary}</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p>{entry.analysis.mood}</p>
      </div>
    </div>
  )
}
export default EntryCard
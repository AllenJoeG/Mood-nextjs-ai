'use client'

import { useAutosave } from 'react-autosave'
import { useState } from 'react'
import { updateEntry } from '@/utils/api'
import Spinner from './Spinner'
import { useRouter } from 'next/navigation'

// (_value grabs the most up to date state that maybe hasn't been swept up in react under the hood)
const Editor = ({entry}) => {
  //Declare State
    const [value, setValue] = useState(entry.content)
    const [isLoading, setIsLoading] = useState(false)
    const [analysis, setAnalysis] = useState(entry.analysis)

    const { mood, summary, subject, color, negative } = analysis
  const analysisData = [
    {name: 'Summary', value: summary},
    {name: 'Subject', value: subject},
    {name: 'Mood', value: mood},
    {name: 'Negative', value: negative ? 'True' : 'False' },
  ]

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

    return (
      <div className="w-full h-full grid grid-cols-3 gap-0 relative">
        <div className="absolute left-0 top-0 p-2">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
          )}
        </div>
        
        <div className="col-span-2">
          <textarea
            className="w-full h-full p-8 text-xl outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
  
        <div className="border-l border-black/10">
          <div className="px-6 py-10" style={{ backgroundColor: color }}>
            <h2 className="text-2xl">Analysis</h2>
          </div>
          <div>
            <ul>
              {analysisData.map((item) => (
                <li
                  key={item.name}
                  className="px-2 py-4 flex items-ceter justify-between border-b border-t border-black/10"
                >
                  <span className="text-lg font-semibold">{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Editor
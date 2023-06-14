'use client'

import { useAutosave } from 'react-autosave'
import { useState } from "react"
import { updatedEntry } from '@/utils/api'

// (_value grabs the most up to date state that maybe hasn't been swept up in react under the hood)
const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
    const [isLoading, setIsLoading] = useState(false)

    useAutosave({
      data: value,
      onSave: async (_value) => {
        setIsLoading(true)
        const updated = await updatedEntry(entry.id, _value)
        setIsLoading(false)
      },
    })

  return(
    <div className="w-full h-full">
      {isLoading && <div>...load..ing...</div>}
      <textarea className="w-full h-full p-8 text-xl outline-none" 
                value={value} 
                onChange={e => setValue(e.target.value)} />

    </div>
  )
}

export default Editor
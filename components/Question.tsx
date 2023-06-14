'use client'
import { useState } from "react"
import { askQuestion } from "@/utils/api"


const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          className='border border-black/20 px-4 py-2 text-lg rounded-lg' 
          onChange={onChange} 
          disabled={loading}
          value={value} 
          type="text" 
          placeholder="Ask a question" 
        />
        <button disabled={loading} type="submit" className="bg-blue-400 px-4 py-2 rounded-lg text-lg"> Ask </button>
      </form>
      {loading && <div>..l.o.a.d.i.n.g...</div>}
      {response && <div>{response}</div>}
    </div>
  )
}

export default Question
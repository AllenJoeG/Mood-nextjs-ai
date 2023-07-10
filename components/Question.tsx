'use client'
import { useState } from "react"
import { askQuestion } from "@/utils/api"


const Question = () => {
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    //send user input to POST through api/question
    const { data } = await askQuestion(question)
    setResponse(data)
    setLoading(false)
    setQuestion('')
  }

  return (
    <div className='pb-4'>
      <form onSubmit={handleSubmit}>
        <input 
          className='border border-black/20 px-4 py-2 text-lg rounded-lg' 
          onChange={(e) => setQuestion(e.target.value)} 
          disabled={loading}
          value={question} 
          type="text" 
          placeholder="Ask a question" 
        />
        <button 
          className="bg-blue-400 px-4 py-2 rounded-md text-lg"
          disabled={loading} 
          type="submit" 
        > 
          Ask 
        </button>
      
      </form>
      {loading && <p>..l.o.a.d.i.n.g...</p>}
      {response && <p className="my-4 text-xl">AI says: {response}</p>}
    </div>
  )
}

export default Question
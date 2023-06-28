//dynamically grabs full url of current place
const createURL = (path) => {
  return window.location.origin + path
}

export const deleteEntry = async (id) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'DELETE',
    })
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Error handling deleteEntry() in utils/api.ts')
  }
}

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    console.log(res);
    throw new Error('Error handling updateEntry() in utils/api.ts')
  }
}


export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      body: JSON.stringify({ content: 'new entry'})
      })
    )
  
  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Error handling createNewEntry() in utils/api.ts')
  }
}

export const askQuestion = async (question) => {
  const res = await fetch(
    new Request(createURL(`/api/question`), {
      method: 'POST',
      body: JSON.stringify({ question }),
    })
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Error handling askQuestion() in utils/api.ts')
  }
}
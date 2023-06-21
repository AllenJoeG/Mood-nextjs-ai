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
    throw new Error('Something went wrong on API server!')
  }
}

export const updateEntry = async (id, content) => {
  const res = await fetch(new Request(createURL(`/api/journal/${id}`), {
    method: 'PATCH',
    body: JSON.stringify({ content }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    // handle error code responses
  }
}


export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      // body: JSON.stringify({})
      })
    )
  
  if (res.ok) {
    const data = await res.json()
    return data.data
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
    throw new Error('Something went wrong on API server!')
  }
}
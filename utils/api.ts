//dynamically grabs full url of current place
const createURL = (path) => {
  return window.location.origin + path
}

export const updatedEntry = async (id, content) => {
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
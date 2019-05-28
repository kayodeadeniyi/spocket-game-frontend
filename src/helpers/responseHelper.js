export const handleResponse = (response) => {
  return response.json().then(myJson => {
    if (!response.ok) {
      const error = (myJson && myJson.error) || response.statusText
      return Promise.reject(error)
    }

    return Promise.resolve(myJson)
  })
}

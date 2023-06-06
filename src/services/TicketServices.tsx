export const TicketServices = function () {
  const urlGetTicketsBase = 'https://aviasales-test-api.kata.academy/tickets'
  const urlSearchId = 'https://aviasales-test-api.kata.academy/search'

  const fetchResponse = async (url: string, searchId?: string) => {
    try {
      const searchIdHeader = searchId ? `?searchId=${searchId}` : ''
      const response = await fetch(`${url}${searchIdHeader}`)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const result = await response.json()

      return { tickets: result, error: null }
    } catch (err: any) {
      return { result: [], error: err }
    }
  }

  const getSearchId = async (url: string) => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const responseSearchId = await response.json()

      const results = await fetchResponse(urlGetTicketsBase, responseSearchId.searchId)
      return results
    } catch (err: any) {
      return { result: [], error: err }
    }
  }

  return {
    getSearchId: () => getSearchId(urlSearchId),
  }
}

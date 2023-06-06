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

      console.log(result.tickets[0])
    } catch (err: any) {
      console.log(err)
    }
  }

  const getSearchId = async (url: string) => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const result = await response.json()
      const searchId = result.searchId
      await fetchResponse(urlGetTicketsBase, searchId)
    } catch (err: any) {
      console.log(err)
    }
  }

  return {
    getSearchId: () => getSearchId(urlSearchId),
  }
}

export const TicketServices = function () {
  const urlGetTicketsBase = 'https://aviasales-test-api.kata.academy/tickets'
  const urlSearchId = 'https://aviasales-test-api.kata.academy/search'

  const fetchTickets = async (searchId?: string) => {
    try {
      const searchIdHeader = searchId ? `?searchId=${searchId}` : ''
      let response = await fetch(`${urlGetTicketsBase}${searchIdHeader}`)

      if (response.status === 500) {
        response = await fetch(`${urlGetTicketsBase}${searchIdHeader}`)
      }

      const result = await response.json()

      return { tickets: result, error: null }
    } catch (err: any) {
      return { tickets: [], error: err }
    }
  }

  const getSearchId = async (url: string = urlSearchId) => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const responseSearchId = await response.json()

      return { searchId: responseSearchId.searchId, errorSearchId: null }
    } catch (err: any) {
      return { searchId: '', errorSearchId: err }
    }
  }

  return {
    getSearchId,
    fetchTickets,
  }
}

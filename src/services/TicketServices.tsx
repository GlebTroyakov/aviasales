export const TicketServices = function () {
  const urlGetTicketsBase = 'https://aviasales-test-api.kata.academy/tickets'
  const urlSearchId = 'https://aviasales-test-api.kata.academy/search'

  // const fetchResponse = async (url: string, searchId?: string) => {
  //   try {
  //     const searchIdHeader = searchId ? `?searchId=${searchId}` : ''
  //     let response = await fetch(`${url}${searchIdHeader}`)

  //     if (response.status === 500) {
  //       response = await fetch(`${url}${searchIdHeader}`)
  //     }

  //     const result = await response.json()

  //     return { tickets: result, error: null }
  //   } catch (err: any) {
  //     return { result: [], error: err }
  //   }
  // }

  // const getSearchId = async (url: string) => {
  //   let res: {
  //     error: null | string
  //     tickets: {
  //       stop: boolean
  //       tickets: ITicket[]
  //     }
  //   } = {
  //     error: null,
  //     tickets: {
  //       stop: false,
  //       tickets: [],
  //     },
  //   }
  //   try {
  //     const response = await fetch(url)

  //     if (!response.ok) {
  //       throw new Error('Could not fetch.')
  //     }

  //     const responseSearchId = await response.json()
  //     while (!res.tickets.stop) {
  //       const results = await fetchResponse(urlGetTicketsBase, responseSearchId.searchId)
  //       res.tickets.tickets = results.tickets.tickets
  //       res.tickets.stop = results.tickets.stop
  //       console.log(results)
  //     }

  //     return res
  //   } catch (err: any) {
  //     res.error = err
  //     return res
  //   }
  // }

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
      return { result: [], error: err }
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
    // getSearchId: () => getSearchId(urlSearchId),
    getSearchId,
    fetchTickets,
  }
}

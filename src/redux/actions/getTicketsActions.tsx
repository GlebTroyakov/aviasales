import { Dispatch } from 'redux'

import { IGetTicketUniversalAction, ITicket } from '../../models'
import { GetTicketsActionTypes } from '../../models'
import { TicketServices } from '../../services/TicketServices'

const aviasalesAPI = TicketServices()

export const getTicketError = (payload: string | null) => {
  return { type: GetTicketsActionTypes.GET_TICKETS_ERROR, payload }
}

export const getTicketLoading = () => {
  return { type: GetTicketsActionTypes.GET_TICKETS_LOADING }
}

export const getTicketTickets = (payload: ITicket[] | []) => {
  return { type: GetTicketsActionTypes.GET_TICKETS, payload }
}

export const getTicketStop = () => {
  return { type: GetTicketsActionTypes.GET_TICKETS_ERROR }
}

export function getTickets(id: string): any {
  return async (dispatch: Dispatch<IGetTicketUniversalAction>) => {
    try {
      const res = await aviasalesAPI.fetchTickets(id)

      if (!res) {
        dispatch(getTickets(id))
      }
      if (!res.tickets.stop && !res.error) {
        dispatch(getTicketTickets(res.tickets.tickets))
        dispatch(getTickets(id))
      } else {
        dispatch(getTicketStop())
        dispatch(getTicketLoading())
      }
    } catch (error: any) {
      dispatch(getTicketError(error.message))
    }
  }
}

import { ITicket } from '../../models'
import { GetTicketsActionTypes } from '../../models'

export const getTicketError = (payload: string | null) => {
  return { type: GetTicketsActionTypes.GET_TICKETS_ERROR, payload }
}

export const getTicketLoading = () => {
  return { type: GetTicketsActionTypes.GET_TICKETS_LOADING }
}

export const getTicketTickets = (payload: ITicket[] | []) => {
  return { type: GetTicketsActionTypes.GET_TICKETS, payload }
}

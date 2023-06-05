import { IAction, ITicketSortingState } from '../../models'
import { CHEAPEST, FASTEST, OPTIMAL } from '../types/ticketSortingTypes'

const initialState: ITicketSortingState = {
  parameterTicket: 'cheapest',
}

export const ticketSortingReducer = (state = initialState, action: IAction): ITicketSortingState => {
  switch (action.type) {
    case CHEAPEST:
      return { ...state, parameterTicket: 'cheapest' }

    case FASTEST:
      return { ...state, parameterTicket: 'fastest' }

    case OPTIMAL:
      return { ...state, parameterTicket: 'optimal' }

    default:
      return state
  }
}

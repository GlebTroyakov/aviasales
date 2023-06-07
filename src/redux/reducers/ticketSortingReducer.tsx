import { ITicketSortingAction, ITicketSortingInitialState } from '../../models'
import { CHEAPEST, FASTEST, OPTIMAL } from '../types/ticketSortingTypes'

const initialState: ITicketSortingInitialState = {
  parameterTicket: 'cheapest',
}

export const ticketSortingReducer = (
  state = initialState,
  action: ITicketSortingAction
): ITicketSortingInitialState => {
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

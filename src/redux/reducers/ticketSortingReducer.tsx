import { IAction } from '../../models'
import { CHEAPEST, FASTEST, OPTIMAL } from '../types/ticketSortingTypes'

const initialState = {
  parameterTicket: 'cheapest',
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const ticketSortingReducer = (state = initialState, action: IAction) => {
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

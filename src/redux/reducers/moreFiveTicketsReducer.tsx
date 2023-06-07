import { IMoreFiveTicketsInitialAction, IMoreFiveTicketsInitialState } from '../../models'
import { ADD_FIVE_TICKETS } from '../types/moreFiveTicketsTypes'

const initialState: IMoreFiveTicketsInitialState = {
  countTickets: 5,
}

export const getFiveTicketReducer = (
  state = initialState,
  action: IMoreFiveTicketsInitialAction
): IMoreFiveTicketsInitialState => {
  switch (action.type) {
    case ADD_FIVE_TICKETS:
      return { ...state, countTickets: state.countTickets + 5 }

    default:
      return state
  }
}

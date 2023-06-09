import { GetTicketsActionTypes, IGetTicketsActionAll, IGetTicketInitialState } from '../../models'

const initialState: IGetTicketInitialState = {
  error: null,
  loading: true,
  tickets: [],
  stop: false,
  loadingPercentage: 0,
}

export const getTicketReducer = (state = initialState, action: IGetTicketsActionAll): IGetTicketInitialState => {
  switch (action.type) {
    case GetTicketsActionTypes.GET_TICKETS_ERROR:
      return { ...state, error: action.payload }

    case GetTicketsActionTypes.GET_TICKETS_LOADING:
      return { ...state, loading: false }

    case GetTicketsActionTypes.GET_TICKETS:
      if (state.loadingPercentage < 90) {
        return {
          ...state,
          tickets: [...state.tickets, ...action.payload],
          loadingPercentage: state.loadingPercentage + 15,
        }
      }
      return { ...state, tickets: [...state.tickets, ...action.payload] }

    case GetTicketsActionTypes.GET_TICKETS_STOP:
      return { ...state, stop: true }

    default:
      return state
  }
}

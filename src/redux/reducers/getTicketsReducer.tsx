import { GetTicketsActionTypes, IGetTicketsActionAll, IGetTicketState } from '../../models'

const initialState: IGetTicketState = {
  error: null,
  loading: false,
  tickets: [],
}

export const getTicketReducer = (state = initialState, action: IGetTicketsActionAll): IGetTicketState => {
  switch (action.type) {
    case GetTicketsActionTypes.GET_TICKETS_ERROR:
      return { ...state, loading: false, error: action.payload }

    case GetTicketsActionTypes.GET_TICKETS_LOADING:
      return { ...state, loading: !state.loading }

    case GetTicketsActionTypes.GET_TICKETS:
      return { ...state, loading: false, tickets: action.payload }

    default:
      return state
  }
}

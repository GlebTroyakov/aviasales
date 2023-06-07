import { GetTicketsActionTypes, IGetTicketsActionAll, IGetTicketInitialState } from '../../models'

const initialState: IGetTicketInitialState = {
  error: null,
  loading: true,
  tickets: [],
}

export const getTicketReducer = (state = initialState, action: IGetTicketsActionAll): IGetTicketInitialState => {
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

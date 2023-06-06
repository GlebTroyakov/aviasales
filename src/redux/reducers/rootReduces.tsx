import { combineReducers } from 'redux'

import { ticketSortingReducer } from './ticketSortingReducer'
import { transferFilterReducer } from './transferFilterReducer'
import { getTicketReducer } from './getTicketsReducer'

export const rootReducer = combineReducers({
  ticketSortingReducer,
  transferFilterReducer,
  getTicketReducer,
})

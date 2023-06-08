import { combineReducers } from 'redux'

import { ticketSortingReducer } from './ticketSortingReducer'
import { transferFilterReducer } from './transferFilterReducer'
import { getTicketReducer } from './getTicketsReducer'
import { getFiveTicketReducer } from './moreFiveTicketsReducer'
import { getSearchIdReducer } from './getSearchIdReducer'

export const rootReducer = combineReducers({
  ticketSortingReducer,
  transferFilterReducer,
  getTicketReducer,
  getFiveTicketReducer,
  getSearchIdReducer,
})

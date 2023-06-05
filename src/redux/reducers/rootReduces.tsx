import { combineReducers } from 'redux'

import { ticketSortingReducer } from './ticketSortingReducer'
import { transferFilterReducer } from './transferFilterReducer'

export const rootReducer = combineReducers({
  ticketSortingReducer,
  transferFilterReducer,
})

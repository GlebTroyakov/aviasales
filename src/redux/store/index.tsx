import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from '../reducers/rootReduces'
import { TicketServices } from '../../services/TicketServices'

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))

TicketServices().getSearchId()

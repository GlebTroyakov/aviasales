import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from '../reducers/rootReduces'

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))

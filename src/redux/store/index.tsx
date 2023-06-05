import { createStore } from 'redux'

import { rootReducer } from '../reducers/rootReduces'

export const store = createStore(rootReducer)

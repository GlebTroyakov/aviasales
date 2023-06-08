import { IGetSearchIdInitialState, IGetSearchIdActions } from '../../models'
import { GET_SEARCH_ID, GET_SEARCH_ID_ERROR } from '../types/getSearchIdTypes'

const initialState: IGetSearchIdInitialState = {
  searchId: '',
  errorSearchId: '',
}

export const getSearchIdReducer = (state = initialState, action: IGetSearchIdActions): IGetSearchIdInitialState => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload, errorSearchId: '' }

    case GET_SEARCH_ID_ERROR:
      return { ...state, errorSearchId: action.payload }

    default:
      return state
  }
}

import { Dispatch } from 'redux'

import { TicketServices } from '../../services/TicketServices'
import { GET_SEARCH_ID, GET_SEARCH_ID_ERROR } from '../types/getSearchIdTypes'
import { IGetSearchIdActions } from '../../models'

const aviasalesAPI = TicketServices()

export const getSearchId = (payload: string) => {
  return { type: GET_SEARCH_ID, payload: payload }
}

export const getSearchIdError = (payload: string) => {
  return { type: GET_SEARCH_ID_ERROR, payload: payload }
}
export function getSearchIdAsync() {
  return async (dispatch: Dispatch<IGetSearchIdActions>) => {
    try {
      const res = await aviasalesAPI.getSearchId()

      if (!res) {
        dispatch(getSearchIdAsync())
      }
      dispatch(getSearchId(res.searchId))
    } catch (error: any) {
      dispatch(getSearchIdError(error.message))
    }
  }
}

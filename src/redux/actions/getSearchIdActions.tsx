import { GET_SEARCH_ID, GET_SEARCH_ID_ERROR } from '../types/getSearchIdTypes'

export const getSearchId = (payload: string) => {
  return { type: GET_SEARCH_ID, payload: payload }
}

export const getSearchIdError = (payload: string) => {
  return { type: GET_SEARCH_ID_ERROR, payload: payload }
}

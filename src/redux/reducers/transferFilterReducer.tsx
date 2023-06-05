import { IAction } from '../../models'
import { ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from '../types/transferFilterTypes'

const initialState = {
  countTransfers: 'no',
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const transferFilterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ALL_TRANSFER:
      return { ...state, countTransfers: 'all' }

    case NO_TRANSFER:
      return { ...state, countTransfers: 'no' }

    case ONE_TRANSFER:
      return { ...state, countTransfers: 'one' }

    case TWO_TRANSFER:
      return { ...state, countTransfers: 'two' }

    case THREE_TRANSFER:
      return { ...state, countTransfers: 'three' }

    default:
      return state
  }
}

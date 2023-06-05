import { IAction } from '../../models'
import { ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from '../types/transferFilterTypes'

const initialState = {
  countTransfers: ['no'],
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const transferFilterReducer = (state = initialState, action: IAction) => {
  let newCountTransfer: [] | string[]

  switch (action.type) {
    case ALL_TRANSFER:
      if (state.countTransfers.indexOf('all') !== -1) {
        return { ...state, countTransfers: [] }
      }
      return { ...state, countTransfers: ['all', 'no', 'one', 'two', 'three'] }

    case NO_TRANSFER:
      if (state.countTransfers.indexOf('no') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'no') }
      }
      return { ...state, countTransfers: [...state.countTransfers, 'no'] }

    case ONE_TRANSFER:
      if (state.countTransfers.indexOf('one') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'one') }
      }
      return { ...state, countTransfers: [...state.countTransfers, 'one'] }

    case TWO_TRANSFER:
      if (state.countTransfers.indexOf('two') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'two') }
      }
      return { ...state, countTransfers: [...state.countTransfers, 'two'] }

    case THREE_TRANSFER:
      if (state.countTransfers.indexOf('three') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'three') }
      }
      return { ...state, countTransfers: [...state.countTransfers, 'three'] }

    default:
      return state
  }
}

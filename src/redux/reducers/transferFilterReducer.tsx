import { ITransferFilterAction, ITransferFilterInitialState } from '../../models'
import { ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from '../types/transferFilterTypes'

const initialState: ITransferFilterInitialState = {
  countTransfers: ['no'],
}

export const transferFilterReducer = (
  state = initialState,
  action: ITransferFilterAction
): ITransferFilterInitialState => {
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
      if (state.countTransfers.length === 3) {
        newCountTransfer = [...state.countTransfers, 'all']
      } else {
        newCountTransfer = [...state.countTransfers]
      }
      return { ...state, countTransfers: [...newCountTransfer, 'no'] }

    case ONE_TRANSFER:
      if (state.countTransfers.indexOf('one') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'one') }
      }
      if (state.countTransfers.length === 3) {
        newCountTransfer = [...state.countTransfers, 'all']
      } else {
        newCountTransfer = [...state.countTransfers]
      }
      return { ...state, countTransfers: [...newCountTransfer, 'one'] }

    case TWO_TRANSFER:
      if (state.countTransfers.indexOf('two') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'two') }
      }
      if (state.countTransfers.length === 3) {
        newCountTransfer = [...state.countTransfers, 'all']
      } else {
        newCountTransfer = [...state.countTransfers]
      }
      return { ...state, countTransfers: [...newCountTransfer, 'two'] }

    case THREE_TRANSFER:
      if (state.countTransfers.indexOf('three') !== -1) {
        if (state.countTransfers.indexOf('all') !== -1) {
          newCountTransfer = state.countTransfers.filter((item) => item !== 'all')
        } else {
          newCountTransfer = [...state.countTransfers]
        }
        return { ...state, countTransfers: newCountTransfer.filter((item) => item !== 'three') }
      }
      if (state.countTransfers.length === 3) {
        newCountTransfer = [...state.countTransfers, 'all']
      } else {
        newCountTransfer = [...state.countTransfers]
      }
      return { ...state, countTransfers: [...newCountTransfer, 'three'] }

    default:
      return state
  }
}

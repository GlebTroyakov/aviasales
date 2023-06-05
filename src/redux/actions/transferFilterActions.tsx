import { ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from '../types/transferFilterTypes'

export const allTransfer = () => {
  return { type: ALL_TRANSFER }
}

export const noTransfer = () => {
  return { type: NO_TRANSFER }
}

export const oneTransfer = () => {
  return { type: ONE_TRANSFER }
}

export const twoTransfer = () => {
  return { type: TWO_TRANSFER }
}

export const threeTransfer = () => {
  return { type: THREE_TRANSFER }
}

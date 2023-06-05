import { CHEAPEST, FASTEST, OPTIMAL } from '../types/ticketSortingTypes'

export const cheapest = () => {
  return { type: CHEAPEST }
}

export const fastest = () => {
  return { type: FASTEST }
}

export const optimal = () => {
  return { type: OPTIMAL }
}

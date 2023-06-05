export interface IAction {
  type: string
  payload?: any
}

export interface ITicketSortingState {
  ticketSortingReducer?: any
  transferFilterReducer?: any
}

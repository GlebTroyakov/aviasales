export interface IAction {
  type: string
  payload?: any
}

export interface ITicketSortingState {
  ticketSortingReducer?: any
  transferFilterReducer?: any
}

export interface ITransferFilterState {
  countTransfers: string[]
}

export interface ITicketSortingState {
  parameterTicket: string
}

// getTicketREducer

export enum GetTicketsActionTypes {
  GET_TICKETS_ERROR = 'GET_TICKETS_ERROR',
  GET_TICKETS_LOADING = 'GET_TICKETS_LOADING',
  GET_TICKETS = 'GET_TICKETS',
}

export interface IGetTicketsLoadingAction {
  type: GetTicketsActionTypes.GET_TICKETS_LOADING
}

export interface IGetTicketsAction {
  type: GetTicketsActionTypes.GET_TICKETS
  payload: [] | ITicket[]
}

export interface IGetTicketsErrorAction {
  type: GetTicketsActionTypes.GET_TICKETS_ERROR
  payload: string | null
}

export type IGetTicketsActionAll = IGetTicketsAction | IGetTicketsErrorAction | IGetTicketsLoadingAction

export interface ITicketSortingState {
  ticketSortingReducer?: any
  transferFilterReducer?: any
}

export interface IGetTicketState {
  error: string | null
  loading: boolean
  tickets: ITicket[] | []
}

// ticketSortingReducer

export interface ITicketSortingAction {
  type: string
}

export interface ITicketSortingState {
  parameterTicket: string
}

// TransferFilterReducer

export interface ITransferFilterAction {
  type: string
}

export interface ITransferFilterState {
  countTransfers: string[]
}

// Other

interface IInfoTickets {
  origin: string
  destination: string
  date: string
  duration: number
  stops: string[]
}

export interface ITicket {
  carrier: string
  prise: number
  segments: IInfoTickets[]
}

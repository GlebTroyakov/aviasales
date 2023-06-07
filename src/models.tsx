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

export interface IGetTicketInitialState {
  error: string | null
  loading: boolean
  tickets: ITicket[] | []
}

export interface IGetTicketsReducerState {
  getTicketReducer: any
}

// ticketSortingReducer

export interface ITicketSortingAction {
  type: string
}

export interface ITicketSortingInitialState {
  parameterTicket: string
}

export interface ITicketSortingReducerState {
  ticketSortingReducer: any
}

// TransferFilterReducer

export interface ITransferFilterAction {
  type: string
}

export interface ITransferFilterInitialState {
  countTransfers: string[]
}

export interface ITransferFilterReducerState {
  transferFilterReducer: any
}

// more five tickets

export interface IMoreFiveTicketsInitialState {
  countTickets: number
}

export interface IMoreFiveTicketsInitialAction {
  type: string
}

export interface IMoreFiveTicketsReducerState {
  getFiveTicketReducer: any
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
  price: number
  segments: IInfoTickets[]
}

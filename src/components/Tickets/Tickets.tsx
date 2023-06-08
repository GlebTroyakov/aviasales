import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

import { ErrorFetch } from '../ErrorFetch'
import { Loading } from '../Loading'
import { ShowMore } from '../ShowMore'
import { Ticket } from '../Ticket/Ticket'
import {
  IGetSearchIdReducerState,
  IGetTicketsReducerState,
  IMoreFiveTicketsReducerState,
  ITicket,
  ITicketSortingReducerState,
  ITransferFilterReducerState,
} from '../../models'
import { getTickets } from '../../redux/actions/getTicketsActions'
import { getSearchIdAsync } from '../../redux/actions/getSearchIdActions'

import classes from './Tickets.module.scss'

export function Tickets() {
  const { loading, tickets, error, stop } = useSelector((state: IGetTicketsReducerState) => state.getTicketReducer)
  const { countTickets } = useSelector((state: IMoreFiveTicketsReducerState) => state.getFiveTicketReducer)
  const selectedTransfer = useSelector(
    (state: ITransferFilterReducerState) => state.transferFilterReducer.countTransfers
  )
  const selectedParameter = useSelector(
    (state: ITicketSortingReducerState) => state.ticketSortingReducer.parameterTicket
  )
  const resultsSearchId = useSelector((state: IGetSearchIdReducerState) => state.getSearchIdReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getSearchIdAsync())
  }, [])

  useEffect(() => {
    if (!stop && resultsSearchId.searchId) {
      // @ts-ignore
      dispatch(getTickets(resultsSearchId.searchId))
    }
  }, [resultsSearchId])

  const parameterTransferFilter: number[] = []
  for (let parameter of selectedTransfer) {
    switch (parameter) {
      case 'no':
        parameterTransferFilter.push(0)
        break
      case 'one':
        parameterTransferFilter.push(1)
        break
      case 'two':
        parameterTransferFilter.push(2)
        break
      case 'three':
        parameterTransferFilter.push(3)
        break
      default:
        parameterTransferFilter.length = 0
        break
    }
  }

  let selectedTickets

  if (parameterTransferFilter.length > 0) {
    selectedTickets = tickets.filter((ticket: ITicket) => {
      return parameterTransferFilter.indexOf(ticket.segments[0].stops.length) !== -1
    })
  } else {
    selectedTickets = []
  }

  if (selectedParameter === 'cheapest') {
    selectedTickets.sort((a: ITicket, b: ITicket) => (a.price > b.price ? 1 : -1))
  } else if (selectedParameter === 'fastest') {
    selectedTickets.sort((a: any, b: any) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1))
  } else {
    selectedTickets.sort((a: any, b: any) => (a.segments[0].stops.length > b.segments[0].stops.length ? 1 : -1))
  }

  const showErrorFetch = error && <ErrorFetch />

  const showLoading = loading && <Loading />
  const fiveTickets = selectedTickets.slice(0, countTickets)

  const resTickets = fiveTickets.map((ticket: ITicket) => {
    return <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} key={nanoid()} />
  })

  return (
    <div className={classes.tickets}>
      {showLoading}
      {showErrorFetch}
      {resTickets}
      {tickets.length >= countTickets && parameterTransferFilter.length > 0 && <ShowMore />}
    </div>
  )
}

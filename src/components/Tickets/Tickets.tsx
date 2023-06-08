import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

import { ErrorFetch } from '../ErrorFetch'
import { TicketServices } from '../../services/TicketServices'
import { Loading } from '../Loading'
import { ShowMore } from '../ShowMore'
import { Ticket } from '../Ticket/Ticket'
import {
  IGetTicketsReducerState,
  IMoreFiveTicketsReducerState,
  ITicket,
  ITransferFilterReducerState,
} from '../../models'
import { getTicketLoading, getTicketTickets, getTicketError } from '../../redux/actions/getTicketsActions'

import classes from './Tickets.module.scss'

export function Tickets() {
  const { loading, tickets, error } = useSelector((state: IGetTicketsReducerState) => state.getTicketReducer)
  const { countTickets } = useSelector((state: IMoreFiveTicketsReducerState) => state.getFiveTicketReducer)
  const selectedTransfer = useSelector(
    (state: ITransferFilterReducerState) => state.transferFilterReducer.countTransfers
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const res = TicketServices().getSearchId()
    res.then((results) => {
      dispatch(getTicketLoading())
      if (results.tickets) {
        dispatch(getTicketTickets(results.tickets.tickets))
        dispatch(getTicketError(null))
      }
      if (results.error) {
        dispatch(getTicketError(results.error))
      }
    })
  }, [])

  // useEffect(() => {
  //   console.log('loading :', loading)
  // }, [loading])

  // useEffect(() => {
  //   console.log('tickets :', tickets)
  // }, [tickets])

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

  // console.log('selectedTickets :', selectedTickets)
  // console.log('selectedTransfer :', selectedTransfer)
  // console.log('parameterTransferFilter :', parameterTransferFilter)

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

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

import { ErrorFetch } from '../ErrorFetch'
import { TicketServices } from '../../services/TicketServices'
import { Loading } from '../Loading'
import { ShowMore } from '../ShowMore'
import { Ticket } from '../Ticket/Ticket'
import { IGetTicketsReducerState, IMoreFiveTicketsReducerState, ITicket } from '../../models'
import { getTicketLoading, getTicketTickets, getTicketError } from '../../redux/actions/getTicketsActions'

import classes from './Tickets.module.scss'

export function Tickets() {
  const { loading, tickets, error } = useSelector((state: IGetTicketsReducerState) => state.getTicketReducer)
  const { countTickets } = useSelector((state: IMoreFiveTicketsReducerState) => state.getFiveTicketReducer)
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

  const showErrorFetch = error && <ErrorFetch />

  const showLoading = loading && <Loading />
  const fiveTickets = tickets.slice(0, countTickets)

  const resTickets = fiveTickets.map((ticket: ITicket) => {
    return <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} key={nanoid()} />
  })

  return (
    <div className={classes.tickets}>
      {showLoading}
      {showErrorFetch}
      {resTickets}
      {tickets.length >= countTickets && <ShowMore />}
    </div>
  )
}

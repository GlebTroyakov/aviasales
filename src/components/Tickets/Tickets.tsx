import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

import { ErrorFetch } from '../ErrorFetch'
import { TicketServices } from '../../services/TicketServices'
import { Loading } from '../Loading'
import { ShowMore } from '../ShowMore'
import { Ticket } from '../Ticket/Ticket'
import { IGetTicketsReducerState, ITicket } from '../../models'
import { getTicketLoading, getTicketTickets, getTicketError } from '../../redux/actions/getTicketsActions'

import classes from './Tickets.module.scss'

export function Tickets() {
  const { loading, tickets, error } = useSelector((state: IGetTicketsReducerState) => state.getTicketReducer)
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
  const fiveTickets = tickets.slice(0, 5)

  const resTickets = fiveTickets.map((ticket: ITicket) => {
    return <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} key={nanoid()} />
  })

  // const ticket = {
  //   carrier: 'BT',
  //   price: 92659,
  //   segments: [
  //     {
  //       origin: 'MOW',
  //       destination: 'HKT',
  //       date: '2023-05-24T17:55:58.877Z',
  //       duration: 1086,
  //       stops: ['DEL', 'HKG'],
  //     },
  //     {
  //       origin: 'HKG',
  //       destination: 'MOW',
  //       date: '2024-02-27T08:37:08.952Z',
  //       duration: 725,
  //       stops: [],
  //     },
  //   ],
  // }

  // const allTickets = [
  //   <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} key={1} />,
  //   <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} key={2} />,
  // ]

  return (
    <div className={classes.tickets}>
      {/* <button onClick={() => dispatch(getTicketLoading())}>Loading On/Off</button> */}
      {showLoading}
      {showErrorFetch}
      {resTickets}
      {/* {allTickets} */}
      <ShowMore />
    </div>
  )
}

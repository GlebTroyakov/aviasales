// import { TicketServices } from '../../services/TicketServices'
import { Loading } from '../Loading'
import { ShowMore } from '../ShowMore'
import { Ticket } from '../Ticket/Ticket'

import classes from './Tickets.module.scss'

export function Tickets() {
  // const res = TicketServices().getSearchId()
  // // console.log(res)
  // res.then((results) => console.log('res', results))

  const ticketsTampltates = [
    {
      price: '13 400 Р',
      logo: '1',
      forward: ['MOW - HKT', '10:45 - 08:00', '21ч 15м', 'HKG, JNB'],
      back: ['HKT - MOW', '11:20 - 00:50', '13ч 30м', 'HKG'],
    },
  ]

  const tickets = [
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
      key={1}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
      key={2}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
      key={3}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
      key={4}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
      key={5}
    />,
  ]

  return (
    <div className={classes.tickets}>
      <Loading />
      {tickets}
      <ShowMore />
    </div>
  )
}

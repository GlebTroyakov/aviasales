import { ITicket } from '../../models'

import classes from './Ticket.module.scss'

export function Ticket({ carrier, price, segments }: ITicket) {
  const urlImage = 'https://pics.avs.io/99/36/'

  function conversionTime(allMinutes: number): number[] {
    const hours = allMinutes / 60
    const minutes = allMinutes % 60
    return [Math.floor(hours), Math.floor(minutes)]
  }

  function getTimeInFormat(allMinutes: number): string {
    const [hours, minutes] = conversionTime(allMinutes)
    return `${hours}ч ${minutes}м`
  }

  function getTransfersInString(array: [] | string[]): string {
    if (array.length === 0) {
      return ''
    }
    let result = ''
    array.forEach((item) => (result += `${item}, `))
    return result.slice(0, result.length - 2)
  }

  function getArrivalTime(allMinutes: number, departure: string) {
    const [hours, minutes] = conversionTime(allMinutes)
    const departureDate = new Date(departure)

    const arrivalMinutes = (departureDate.getMinutes() + minutes) % 60
    const doneArrivalMinutes = arrivalMinutes < 10 ? `0${arrivalMinutes}` : arrivalMinutes
    const arrivalHours = departureDate.getHours() + hours + (departureDate.getMinutes() + minutes) / 60
    const doneArrivalHours = arrivalHours > 24 ? arrivalHours % 24 : arrivalHours

    return `${departureDate.getHours()}:${departureDate.getMinutes()} - ${Math.floor(
      doneArrivalHours
    )}:${doneArrivalMinutes}`
  }

  const transfer = ['БЕЗ ПЕРЕСАДОК', '1 ПЕРЕСАДКА', '2 ПЕРЕСАДКИ', '3 ПЕРЕСАДКИ']

  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-header']}>
        <span className={classes['ticket-price']}>{`${price} Р`}</span>
        <img src={`${urlImage}${carrier}.png`} alt="logo" width="100px" />
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['up-cell']}>{`${segments[0].origin} - ${segments[1].origin}`}</div>
        <div className={classes['up-cell']}>В ПУТИ</div>
        <div className={classes['up-cell']}>{transfer[segments[0].stops.length]}</div>
        <div className={classes['down-cell']}>{getArrivalTime(segments[0].duration, segments[0].date)}</div>
        <div className={classes['down-cell']}>{getTimeInFormat(segments[0].duration)}</div>
        <div className={classes['down-cell']}>{getTransfersInString(segments[0].stops)}</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['up-cell']}>{`${segments[1].origin} - ${segments[0].origin}`}</div>
        <div className={classes['up-cell']}>В ПУТИ</div>
        <div className={classes['up-cell']}>{transfer[segments[1].stops.length]}</div>
        <div className={classes['down-cell']}>{getArrivalTime(segments[1].duration, segments[1].date)}</div>
        <div className={classes['down-cell']}>{getTimeInFormat(segments[1].duration)}</div>
        <div className={classes['down-cell']}>{getTransfersInString(segments[1].stops)}</div>
      </div>
    </div>
  )
}

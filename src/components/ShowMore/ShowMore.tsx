import { useDispatch } from 'react-redux'

import { addFiveTickets } from '../../redux/actions/moreFiveTicketsActions'

import classes from './ShowMore.module.scss'

export function ShowMore() {
  const dispatch = useDispatch()

  return (
    <button className={classes['show-more']} onClick={() => dispatch(addFiveTickets())}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  )
}

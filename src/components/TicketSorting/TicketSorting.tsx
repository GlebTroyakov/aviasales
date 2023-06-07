import { useSelector, useDispatch } from 'react-redux'

import { cheapest, fastest, optimal } from '../../redux/actions/ticketSortingActions'
import { ITicketSortingReducerState } from '../../models'

import classes from './TicketSorting.module.scss'

export function TicketSorting() {
  const selectedParameter = useSelector(
    (state: ITicketSortingReducerState) => state.ticketSortingReducer.parameterTicket
  )

  const dispatch = useDispatch()

  return (
    <div className={classes['ticket-sorting']}>
      <ul className={classes['ticket-sorting_ul']}>
        <li className={classes['ticket-sorting_li']}>
          <input
            type="radio"
            value="cheapest"
            name="ticket-sorting"
            id="cheapest"
            className={classes['transfer-sorting_checkbox']}
            hidden
            onChange={() => dispatch(cheapest())}
            checked={selectedParameter === 'cheapest'}
          ></input>
          <label htmlFor="cheapest" className={classes['ticket-sorting_label__left']}>
            САМЫЙ ДЕШЕВЫЙ
          </label>
        </li>

        <li className={classes['ticket-sorting_li']}>
          <input
            type="radio"
            value="fastest"
            name="ticket-sorting"
            id="fastest"
            className={classes['transfer-sorting_checkbox']}
            hidden
            onChange={() => dispatch(fastest())}
            checked={selectedParameter === 'fastest'}
          ></input>
          <label htmlFor="fastest" className={classes['ticket-sorting_label']}>
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li className={classes['ticket-sorting_li']}>
          <input
            type="radio"
            value="optimal"
            name="ticket-sorting"
            id="optimal"
            className={classes['transfer-sorting_checkbox']}
            hidden
            onChange={() => dispatch(optimal())}
            checked={selectedParameter === 'optimal'}
          ></input>
          <label htmlFor="optimal" className={classes['ticket-sorting_label__right']}>
            ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
    </div>
  )
}

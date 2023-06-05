import { useDispatch, useSelector } from 'react-redux'

import {
  allTransfer,
  noTransfer,
  oneTransfer,
  twoTransfer,
  threeTransfer,
} from '../../redux/actions/transferFilterActions'
import { ITicketSortingState } from '../../models'

import classes from './TransferFilter.module.scss'

export function TransferFilter() {
  const selectedTransfer = useSelector((state: ITicketSortingState) => state.transferFilterReducer.countTransfers)
  const dispatch = useDispatch()

  return (
    <div className={classes['transfer-filter']}>
      <span className={classes['transfer-filter_title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className={classes['transfer-filter_ul']}>
        <li>
          <input
            type="checkbox"
            value="all"
            name="all"
            id="all"
            className={classes['transfer-filter_checkbox']}
            hidden
            onChange={() => dispatch(allTransfer())}
            checked={selectedTransfer.indexOf('all') !== -1}
          ></input>
          <label htmlFor="all" className={classes['transfer-filter_label']}>
            Все
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            value="no-transfer"
            name="no-transfer"
            id="no-transfer"
            className={classes['transfer-filter_checkbox']}
            hidden
            onChange={() => dispatch(noTransfer())}
            checked={selectedTransfer.indexOf('no') !== -1}
          ></input>
          <label htmlFor="no-transfer" className={classes['transfer-filter_label']}>
            Без пересадок
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            value="1-transfer"
            name="1-transfer"
            id="1-transfer"
            className={classes['transfer-filter_checkbox']}
            hidden
            onChange={() => dispatch(oneTransfer())}
            checked={selectedTransfer.indexOf('one') !== -1}
          ></input>
          <label htmlFor="1-transfer" className={classes['transfer-filter_label']}>
            1 пересадка
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            value="2-transfer"
            name="2-transfer"
            id="2-transfer"
            className={classes['transfer-filter_checkbox']}
            hidden
            onChange={() => dispatch(twoTransfer())}
            checked={selectedTransfer.indexOf('two') !== -1}
          ></input>
          <label htmlFor="2-transfer" className={classes['transfer-filter_label']}>
            2 пересадки
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            value="3-transfer"
            name="3-transfer"
            id="3-transfer"
            className={classes['transfer-filter_checkbox']}
            hidden
            onChange={() => dispatch(threeTransfer())}
            checked={selectedTransfer.indexOf('three') !== -1}
          ></input>
          <label htmlFor="3-transfer" className={classes['transfer-filter_label']}>
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

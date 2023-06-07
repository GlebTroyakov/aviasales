import { Offline } from 'react-detect-offline'

import classes from './ErrorNotNetwork.module.scss'

export const ErrorNotNetwork = () => {
  return (
    <Offline polling={false}>
      <div className={classes.error}>Нет подключения к интернету.</div>
    </Offline>
  )
}

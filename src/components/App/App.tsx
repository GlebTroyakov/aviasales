import React from 'react'
import { Provider } from 'react-redux'

import { ErrorNotNetwork } from '../ErrorNotNetwork'
import logo from '../../images/Logo-2.png'
import { Content } from '../Content'
import { store } from '../../redux/store/index'

import classes from './App.module.scss'

export function App() {
  return (
    <Provider store={store}>
      <ErrorNotNetwork />
      <div className={classes.app}>
        <img className={classes['app-logo']} src={logo} alt="logo"></img>
        <Content />
      </div>
    </Provider>
  )
}

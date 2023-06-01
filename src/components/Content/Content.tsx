import React from 'react'

import { TransferFilter } from '../TransferFilter'
import { TicketSorting } from '../TicketSorting'
import { Tickets } from '../Tickets'

import classes from './Content.module.scss'

export function Content() {
  return (
    <div className={classes.content}>
      <TransferFilter />
      <div>
        <TicketSorting />
        <Tickets />
      </div>
    </div>
  )
}

import React from "react";
import { TransferFilter } from "../TransferFilter";
import { TicketSorting } from "../TicketSorting";
import { Tickets } from "../Tickets";
import { ShowMore } from "../ShowMore";

import classes from "./Content.module.scss";

export function Content() {
  return (
    <div className={classes.content}>
      <TransferFilter />
      <TicketSorting />
      <Tickets />
      <ShowMore />
    </div>
  );
}

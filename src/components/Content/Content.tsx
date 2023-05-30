import React from "react";
import { TransferFilter } from "../TransferFilter";
import { TicketSorting } from "../TicketSorting";
import { Tickets } from "../Tickets";
import { ShowMore } from "../ShowMore";

export function Content() {
  return (
    <div className="content">
      <TransferFilter />
      <TicketSorting />
      <Tickets />
      <ShowMore />
    </div>
  );
}

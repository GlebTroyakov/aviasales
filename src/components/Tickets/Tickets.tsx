import { ShowMore } from "../ShowMore";
import { Ticket } from "../Ticket/Ticket";
import classes from "./Tickets.module.scss";

export function Tickets() {
  const ticketsTampltates = [
    {
      price: "13 400 Р",
      logo: "1",
      forward: ["MOW - HKT", "10:45 - 08:00", "21ч 15м", "HKG, JNB"],
      back: ["HKT - MOW", "11:20 - 00:50", "13ч 30м", "HKG"],
    },
  ];

  const tickets = [
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
    />,
    <Ticket
      price={ticketsTampltates[0].price}
      logo={ticketsTampltates[0].logo}
      forward={ticketsTampltates[0].forward}
      back={ticketsTampltates[0].back}
    />,
  ];

  return (
    <div className={classes.tickets}>
      {tickets}
      <ShowMore />
    </div>
  );
}

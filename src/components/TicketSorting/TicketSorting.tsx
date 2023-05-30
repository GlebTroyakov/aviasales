import classes from "./TicketSorting.module.scss";

export function TicketSorting() {
  return (
    <div
      className={classes.ticketSorting}
      //   style={{ backgroundColor: "blue", width: "502px", height: "50px" }}
    >
      <button className={`${classes["button-first"]}`}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={classes.button}>САМЫЙ БЫСТРЫЙ</button>
      <button className={`${classes["button-last"]}`}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
}

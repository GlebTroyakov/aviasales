import classes from "./TicketSorting.module.scss";

export function TicketSorting() {
  return (
    <div className={classes["ticket-sorting"]}>
      <ul className={classes["ticket-sorting_ul"]}>
        <li className={classes["ticket-sorting_li"]}>
          <input
            type="radio"
            value="cheapest"
            name="ticket-sorting"
            id="cheapest"
            className={classes["transfer-sorting_checkbox"]}
            hidden
          ></input>
          <label
            htmlFor="cheapest"
            className={classes["ticket-sorting_label__left"]}
          >
            САМЫЙ ДЕШЕВЫЙ
          </label>
        </li>

        <li className={classes["ticket-sorting_li"]}>
          <input
            type="radio"
            value="fastest"
            name="ticket-sorting"
            id="fastest"
            className={classes["transfer-sorting_checkbox"]}
            hidden
          ></input>
          <label htmlFor="fastest" className={classes["ticket-sorting_label"]}>
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li className={classes["ticket-sorting_li"]}>
          <input
            type="radio"
            value="optimal"
            name="ticket-sorting"
            id="optimal"
            className={classes["transfer-sorting_checkbox"]}
            hidden
          ></input>
          <label
            htmlFor="optimal"
            className={classes["ticket-sorting_label__right"]}
          >
            ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
      {/* <button className={`${classes["button-first"]}`}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={classes.button}>САМЫЙ БЫСТРЫЙ</button>
      <button className={`${classes["button-last"]}`}>ОПТИМАЛЬНЫЙ</button> */}
    </div>
  );
}

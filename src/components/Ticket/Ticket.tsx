import classes from "./Ticket.module.scss";

export function Ticket({
  price,
  logo,
  forward,
  back,
}: {
  price: string;
  logo: string;
  forward: string[];
  back: string[];
}) {
  const transfer = ["1 ПЕРЕСАДКА", "2 ПЕРЕСАДКИ", "3 ПЕРЕСАДКИ"];

  const forwardTransfer = forward[3].split(",");
  const backTransfer = forward[3].split(",");

  return (
    <div className={classes.ticket}>
      <div className={classes["ticket-header"]}>
        <span className={classes["ticket-price"]}>{price}</span>
        <span>{logo}</span>
      </div>
      <div className={classes["ticket-info"]}>
        <div className={classes["up-cell"]}>{forward[0]}</div>
        <div className={classes["up-cell"]}>В ПУТИ</div>
        <div className={classes["up-cell"]}>
          {transfer[forwardTransfer.length - 1]}
        </div>
        <div className={classes["down-cell"]}>{forward[1]}</div>
        <div className={classes["down-cell"]}>{forward[2]}</div>
        <div className={classes["down-cell"]}>{forward[3]}</div>
      </div>
      <div className={classes["ticket-info"]}>
        <div className={classes["up-cell"]}>{back[0]}</div>
        <div className={classes["up-cell"]}>В ПУТИ</div>
        <div className={classes["up-cell"]}>
          {transfer[backTransfer.length - 1]}
        </div>
        <div className={classes["down-cell"]}>{back[1]}</div>
        <div className={classes["down-cell"]}>{back[2]}</div>
        <div className={classes["down-cell"]}>{back[3]}</div>
      </div>
    </div>
  );
}

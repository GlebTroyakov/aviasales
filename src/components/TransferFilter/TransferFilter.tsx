import classes from "./TransferFilter.module.scss";

export function TransferFilter() {
  return (
    <div className={classes["transfer-filter"]}>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form className={classes["transfer-filter_form"]}>
        <label>
          <input type="checkbox" value="Все"></input>
          Все
        </label>
        <label>
          <input type="checkbox" value="Без пересадок"></input>
          Без пересадок
        </label>
        <label className="test">
          <input type="checkbox" value="1 пересадка"></input>1 пересадка
        </label>
        <label>
          <input type="checkbox" value="2 пересадки"></input>2 пересадки
        </label>
        <label>
          <input type="checkbox" value="3 пересадки"></input>3 пересадки
        </label>
      </form>
    </div>
  );
}

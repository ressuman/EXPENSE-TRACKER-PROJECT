import { useContext } from "react";

import "./Balance.css";
import { GlobalContext } from "../../context/GlobalState.jsx";
import { numberWithCommas } from "../../utils/format.jsx";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const total = amounts?.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-container">
      <h4 className="balance-title">Your Balance</h4>
      <h1 className={total >= 0 ? "money plus" : "money minus"}>
        ${numberWithCommas(total)}
      </h1>
    </div>
  );
}

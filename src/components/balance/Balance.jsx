import { useContext } from "react";
import PropTypes from "prop-types";
import "./Balance.css";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount) || [];

  const total = amounts?.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <div className="balance-container">
      <h4 className="balance-title">Your Balance</h4>
      <h1 className={`money ${total >= 0 ? "plus" : "minus"}`}>
        ${numberWithCommas(total)}
      </h1>
    </div>
  );
}

import { useContext } from "react";
import "./Transactions.css";
import { GlobalContext } from "../../context/GlobalState.jsx";
import PropTypes from "prop-types";
import { numberWithCommas } from "../../utils/format.jsx";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};

import { useContext, useState } from "react";
import "./Transactions.css";
import { GlobalContext } from "../../context/GlobalState.jsx";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || isNaN(amount) || amount === 0) {
      alert("Please enter valid text and amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text.toUpperCase(),
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

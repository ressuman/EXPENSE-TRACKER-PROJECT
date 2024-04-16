const TransactionModel = require("../model/Transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find();
    console.log("GT", transactions);
    return res.status(200).json({
      success: true,
      status: true,
      message: "All Transactions retrieved",
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    console.error("Error retrieving all transactions:", err);
    return res.status(500).json({
      success: false,
      status: false,
      error: "Server Error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res) => {
  try {
    const { text, amount } = req.body;

    const transaction = await TransactionModel.create(req.body);

    return res.status(201).json({
      success: true,
      status: true,
      message: "New Transaction created",
      data: transaction,
    });
  } catch (err) {
    console.error("Error creating a new transaction:", err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        status: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        status: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await TransactionModel.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        status: false,
        error: "No transaction found",
      });
    }

    return res.status(200).json({
      success: true,
      status: true,
      message: "Transaction deleted successfully",
      data: transaction,
    });
  } catch (err) {
    console.error("Error deleting transaction:", err);
    return res.status(500).json({
      success: false,
      status: false,
      error: "Server Error",
    });
  }
};

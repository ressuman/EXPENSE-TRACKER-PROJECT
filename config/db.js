const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://ressuman001:jH0XZPdZmgrVGbg6@richardpp.0hx8sqt.mongodb.net/ExpenseTrackerMERN"
    );
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    );
    return connection;
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async (mongoUrl) => {
  try {
    const connection = await mongoose.connect(mongoUrl);

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;

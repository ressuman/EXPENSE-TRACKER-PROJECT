const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

//connectDB();

const app = express();

app.use(
  cors({
    origin: "https://ressuman-expense-tracker-mern-production.up.railway.app",
  })
);

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
}

const PORT = process.env.PORT || 5100;
const mongoUrl = process.env.MONGO_URI;

(async function () {
  await connectDB(mongoUrl).then(() => {
    app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
          .yellow.bold
      )
    );
  });
})();

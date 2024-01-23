const express = require("express");
const homeRouter = require("./routes/homeRoutes");
const app = express();
const cors = require("cors");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use("/", homeRouter);

module.exports = app;

const express = require("express");
const homeRouter = require("./routes/homeRoutes");
const app = express();

app.use(express.json());

app.use("/", homeRouter);

module.exports = app;

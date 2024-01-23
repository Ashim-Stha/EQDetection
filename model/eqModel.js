const mongoose = require("mongoose");

const eqSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  z: Number,
});

const eqModel = mongoose.model("EQ", eqSchema);

module.exports = eqModel;

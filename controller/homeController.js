const EQModel = require("../model/eqModel");
exports.home = async (req, res, next) => {
  const data = await EQModel.find();
  res.status(200).json({
    status: "Success",
    data: data,
  });
};
exports.sendData = async (req, res, next) => {
  const result = await EQModel.create(req.body);
  res.status(200).json({
    status: "sucess",
  });
};
exports.updateData = async (req, res, next) => {
  const result = await EQModel.updateOne(req.body);
  res.status(200).json({
    status: "sucess",
  });
};

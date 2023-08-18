const Cars = require("./cars-model");
const vinValidator = require("vin-validator");

exports.checkCarId = (req, res, next) => {
  Cars.getById(req.params.id).then((data) => {
    if (!data) {
      res.status(404).json({
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      next();
    }
  });
  // DO YOUR MAGIC
};

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { make, model, vin, mileage } = req.body;
  if (!make) {
    res.status(400).json({
      message: `make is missing`,
    });
  } else if (!model) {
    res.status(400).json({
      message: `model is missing`,
    });
  } else if (!vin) {
    res.status(400).json({
      message: `vin is missing`,
    });
  } else if (!mileage) {
    res.status(400).json({
      message: `mileage is missing`,
    });
  } else {
    next();
  }
};

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (!vinValidator.validate(vin)) {
    res.status(400).json({
      message: `vin ${vin} is invalid`,
    });
  } else {
    next();
  }
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
};

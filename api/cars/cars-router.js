// DO YOUR MAGIC
const express = require("express");

const Cars = require("./cars-model");

const {
  checkCarPayload,
  checkCarId,
  checkVinNumberValid,
} = require("./cars-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
});

router.post("/", checkCarPayload, checkVinNumberValid, (req, res, next) => {
  Cars.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next();
    });
});
module.exports = router;

// DO YOUR MAGIC
const express = require("express");

const Cars = require("./cars-model");

const router = express.Router();

router.get("/", (req, res) => {
  Cars.getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res, next) => {
  Cars.getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res) => {
  Cars.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

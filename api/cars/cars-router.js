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
module.exports = router;

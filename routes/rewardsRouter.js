const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
  res.json({ message: "random" });
});

router.get("/increment", (req, res) => {
  res.json({ message: "incrment" });
});

module.exports = router;

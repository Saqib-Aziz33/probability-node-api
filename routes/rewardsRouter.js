const express = require("express");
const router = express.Router();
const dataSet = require("../utils/data_set.json");
const { filter } = require("../utils/helper");

router.get("/increment", (req, res) => {
  // get # of request or create new one
  const reqNumber = parseFloat(req.signedCookies.reqNum) || 1;
  // number by which reward probability increases
  const increase = 1;
  // cookie expire time
  const expires = new Date(Date.now() + 120000); // 2mins
  // filter the data set
  const filtered = filter(dataSet, reqNumber);
  // genrate a random number which selects reward
  const random = Math.floor(Math.random() * filtered.length);
  const reward = filtered[random];

  res
    .status(200)
    .cookie("reqNum", reqNumber + increase, { signed: true, expires })
    .json({ reward });
});

router.get("/random", (req, res) => {
  let selectedData = [];
  // chances ranges between 1-100
  const random = Math.floor(Math.random() * 100);
  // select data based on random number
  if (random <= dataSet.diamond.chances) {
    selectedData = [
      ...dataSet.diamond.rewards,
      ...dataSet.gold.rewards,
      ...dataSet.silver.rewards,
      ...dataSet.bronze.rewards,
    ];
  } else if (random <= dataSet.gold.chances) {
    selectedData = [
      ...dataSet.gold.rewards,
      ...dataSet.silver.rewards,
      ...dataSet.bronze.rewards,
    ];
  } else if (random <= dataSet.silver.chances) {
    selectedData = [...dataSet.silver.rewards, ...dataSet.bronze.rewards];
  } else {
    selectedData = [...dataSet.bronze.rewards];
  }

  // select random reward from seleted data
  const reward = selectedData[Math.floor(Math.random() * selectedData.length)];

  // send responce
  res.json({ reward });
});

module.exports = router;

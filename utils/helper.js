// returns an array of filtered argumnets
// based of number of requests
const filter = (dataObj, visited) => {
  //   campared value is limit vs no of reqs
  if (visited >= 15) {
    return [
      ...dataObj.bronze.rewards,
      ...dataObj.silver.rewards,
      ...dataObj.gold.rewards,
      ...dataObj.diamond.rewards,
    ];
  } else if (visited >= 10) {
    return [
      ...dataObj.bronze.rewards,
      ...dataObj.silver.rewards,
      ...dataObj.gold.rewards,
    ];
  } else if (visited >= 5) {
    return [...dataObj.bronze.rewards, ...dataObj.silver.rewards];
  } else {
    return [...dataObj.bronze.rewards];
  }
};

module.exports = { filter };

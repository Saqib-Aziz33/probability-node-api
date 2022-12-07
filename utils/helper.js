// returns an array of filtered argumnets
// based of number of requests
const filter = (dataSet, visited) => {
  //   campared value is limit vs no of reqs
  if (visited >= 15) {
    return [
      ...dataSet.bronze.rewards,
      ...dataSet.silver.rewards,
      ...dataSet.gold.rewards,
      ...dataSet.diamond.rewards,
    ];
  } else if (visited >= 10) {
    return [
      ...dataSet.bronze.rewards,
      ...dataSet.silver.rewards,
      ...dataSet.gold.rewards,
    ];
  } else if (visited >= 5) {
    return [...dataSet.bronze.rewards, ...dataSet.silver.rewards];
  } else {
    return [...dataSet.bronze.rewards];
  }
};

module.exports = { filter };

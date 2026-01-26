const removeFromArray = function (arr, ...args) {
  return (filteredArray = arr.filter((value) => !args.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;

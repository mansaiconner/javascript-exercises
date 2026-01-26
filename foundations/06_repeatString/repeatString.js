const repeatString = function (str, number) {
  if (number < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 0; i < number; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

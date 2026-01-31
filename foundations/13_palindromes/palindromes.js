const palindromes = function (str) {
  const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
  cleanedString = str
    .toLowerCase()
    .split("")
    .filter((char) => alphanum.includes(char))
    .join("");
  reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

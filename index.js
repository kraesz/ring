const toTitleCase = require("to-title-case");

const lower = "the lord of the rings: the return of the king";
const encourage = "i will finish this bootcamp, easy!";

const textUpperCase = (string) => {
  const capitalizedString = string.toUpperCase();
  return capitalizedString;
};

console.log(lower);
const title = toTitleCase(lower);
console.log(title);
const test = textUpperCase(encourage);
console.log(test);

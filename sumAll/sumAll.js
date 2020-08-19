const sumAll = function (a, b) {
  let sum = 0;
  let begin = a < b ? a : b;
  let end = b > a ? b : a;
  if (typeof begin !== "number" || typeof end !== "number") {
    return "ERROR";
  } else if (begin < 0 || end < 0) {
    return "ERROR";
  } else {
    for (let i = begin; i < end; i++) {
      sum += i;
    }
    return sum + end;
  }
};

module.exports = sumAll;

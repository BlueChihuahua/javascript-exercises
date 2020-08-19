const removeFromArray = function () {
  let arr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (!(arr.some(element => element === arguments[i]))) {
        continue;
    } else {
    let index = arr.findIndex((element) => element === arguments[i]);
    arr.splice(index, 1);
    }
  }
  return arr;
};

module.exports = removeFromArray;

const repeatString = function (string, num) {
  if (num >= 0) {
    let result = '';
    for (let i = 0; i < num; i++) {
      result += string;
    }
    return result;
  } else return 'ERROR';
};

module.exports = repeatString;

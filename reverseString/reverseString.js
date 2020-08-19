const reverseString = function(string) {
    let arr = Array.from(string);
    console.log(arr);
    let reversed = arr.reverse();
    return reversed.join('');
}

module.exports = reverseString

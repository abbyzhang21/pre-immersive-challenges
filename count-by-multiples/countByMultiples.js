module.exports = function countByMultiples(length, x) {
  // write your code in here
  var newArray = [];
  for(var i = 1; i < length + 1; i++){
    newArray.push(i * x);
  }
  return newArray;
}
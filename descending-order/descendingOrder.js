module.exports = function descendingOrder(number) {
  // write code in here
  if(typeof(number) == "number"){
    var digits = ("" + number).split("");  //convert to array of strings
    digits.sort();
    digits.reverse();  //descending order
    var dString = digits.join("");  //convert to string
    var dNum = Number(dString);  //convert back to number
    return dNum;
  }else{
    return "not a number!";
  }
}
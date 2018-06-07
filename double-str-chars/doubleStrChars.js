module.exports = function doubleStrChars(str) {
  // write your code in here
  if(typeof(str) == "string"){
    //split into char array
    var newStr = str.split("").map(function(d){
      return d + d;
    //join updated array
    }).join("")
    return newStr;
  }else{
    return "not a string!";
  }
}
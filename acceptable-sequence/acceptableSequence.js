module.exports = function acceptableSequence(str) {
  // write your code here
  for(var i = 0; i < str.length; i++){
    if(str[i].match(/[a-zA-Z]/)){
      if(str[i-1] !== "+" || str[i+1] !== "+"){
        return false;
      }else{
        return true;
      }
    }
  }
}
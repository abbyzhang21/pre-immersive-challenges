module.exports = function cookieProblem(array) {
  // write your code in here
  var total = 0;
  //select max number
  var big = Math.max(...array);  
  for(var i = 0; i < array.length; i++){
    if(array[i] < big){
      total += big - array[i];
    }
  }
  return total;
}
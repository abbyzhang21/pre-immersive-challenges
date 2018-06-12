module.exports = function findTheStrayValue(array) {
  // write your code in here
  var stray;
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] !== array[j]){
       return stray = array[j];
        
      }
    }
  }
  //return stray;
}
//(array[array.length - 1] !== array[i])
//&& array[i] !== array[j+1]
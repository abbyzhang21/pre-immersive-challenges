module.exports = function findTheLongestWord(sen) {
  // write your code in here
  var longest = '';
  for(var i = 0; i < sen.length; i++){
    //find word with the longest length 
    if(sen[i].length > longest.length){
      longest = sen[i];
    }
  }
  return longest;
}
module.exports = function insertDashes(num) {
  // write your code in here
  var newN = '';
  var d = ('' + num).split('');
  //find two even number
  for(var i = 0; i < d.length; i++){
    if(d[i] % 2 === 0 && d[i+1] % 2 === 0){
      //place dash between
       newN += d[i] + '-';
    }else{
      newN += d[i];
    }
  }
  return newN;
}
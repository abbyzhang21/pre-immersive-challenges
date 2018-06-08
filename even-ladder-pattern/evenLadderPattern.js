module.exports = function evenLadderPattern(num) {
  // write your code in here
  var arr = [];
  var newArr;
  var newA;
    if(num <= 1){
     return "";
     }
    if(num % 2 >= 0 && num !== 0){
      for(var i = 2; i < num+1; i +=2){
        //repeat i for ith times
        var joinN = Array(i+1).join(i);
        arr.push(joinN);
        newArr = arr.join("\n");
        
    }}if(num % 2 !== 0  && num !== 1){
      for(var i = 2; i < num; i +=2){
        //repeat i for ith times
        var joinN = Array(i).join(i);
          
        arr.push(joinN);
        newA = arr.join("\n");
  
    }
    }
    //return newArr;
  }

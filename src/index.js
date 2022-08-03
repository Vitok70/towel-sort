
// You should implement your task here.

module.exports = function towelSort (arr) {
  
  let arrNew = [];
  if (arguments.length !== 0) {
    if (arr.length !== 0) {   
      for (i=0;i<arr.length;i++){
                  if (i % 2 !== 0){
                  arr[i].reverse();
                  } 
       }

       for (i=0;i<arr.length;i++){
          arrNew = arrNew.concat(arr[i]);
        }
    } 
  }
   return arrNew;
}

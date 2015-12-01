//sort N distinct integers lying between 1 and N
function sort(array){
  var temp = [],
      length = array.length;
  for(var i = 0; i < length; i++){
    temp[array[i]] = array[i];
  }
  for(var i = 0;i<length;i++){
    array[i] = temp[i];
  }
  return array;
}

console.log(sort([6,3,1,4,2,5]))

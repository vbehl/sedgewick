//implement insertion sort
function sort(array){
  var length = array.length;
  for(var i = 1; i < length; i++){
    var j = i, value = array[j];
    while(j>0 && value<array[j-1]){
      array[j] = array[j-1];
      j--;
    }
    array[j] = value;
  }
  return array;
}

console.log(sort([192,2,100,-1]));

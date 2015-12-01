//more like sink-sort
//biggest value sinks to the bottom

function sort(array){
  var length = array.length,
      i = 0;
  while(i < length- 1){
    var j = 0;
    while(j < length - i){
      if(array[j+1] < array[j]){
        var temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
      j++;
    }
    i++;
  }
  return array;
}

console.log(sort([19,39,2,0,1]));

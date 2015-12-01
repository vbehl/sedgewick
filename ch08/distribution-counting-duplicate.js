//sort N within a range 0 to M
function sort(array){
  var length = array.length,
      count= new Uint8Array(length),
      temp = [];
  for(var i = 0; i < length; i++)
    count[array[i]]++;
  for(var i = 1;i<length;i++)
    count[i] += count[i-1];
  for(var i = 0; i< length; i++){
    temp[count[array[i]]-1] = array[i];
    count[array[i]]--;
  }
  return temp;
}

console.log(sort([4,4,0,2,3]))

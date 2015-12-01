//implement shell sort
//interleaved h-sorted lists
function sort(gaps, array){
  var length = array.length;
  for(var i=0; i < gaps.length; i++){
    var gap = gaps[i];
    for(var j = gap; j < length; j = j + gap){
      var t = j,
      value = array[t];
      while(t >= gap && value < array[t-gap]){
        array[t] = array[t-gap];
        t = t - gap;
      }
      array[t] = value;
    }
  }
  return array;
}

var gaps = [13,4,1],
    array = [102,38,1,1,23,-1,89,2,33,45,-4,-2,2,10,-5,9];
console.log(sort(gaps,array));

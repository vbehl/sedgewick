//implement selection sort
//repeatedly find the smallest number in a list that is decreasing in size
//swap with the first element

function sort(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var slicedArray = array.slice(i),
      min = Math.min.apply(Math, slicedArray);
    if (min < array[i]) {
      var minIndex = array.indexOf(min),
        temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}


console.log(sort([83,1,-1,29,8]));

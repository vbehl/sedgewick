function sort(array) {
  var length = array.length,x = array[0],
     t = x,
      count = [0,0],
      i = 0,
      y;
  while(array[i]==x && i < array.length){
    i++;
  }
  y = array[i];
  if(x<y){
    t = x;
    x = 0;
    y = y - t;
  }
  else{
    t = y;
    y = 0;
    x = x - t;
  }
  for(var i = 0;i<array.length;i++){
    if(t==array[i])
      count[0]++;
    else
      count[1]++;
  }
  while(count[0]){
    array[count[0]-1] = t;
    count[0]--;
  }
  while(count[1]){
    array[array.length - 1] = t + y;
    count[1]--;
  }
  return array;

}

console.log(sort([0, 0, 1, 0, 1, 1, 0]))

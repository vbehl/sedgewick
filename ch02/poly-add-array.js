//adding polynomials represented as arrays

function add(x,y){
  var sum = [];
  for(var i = 0; i<x.length; i++)
    sum[i] = x[i]+y[i]
  return sum;
}

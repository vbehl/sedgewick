//multiplying polynomials represented as arrays

function multiply(x,y){
  var product = new Uint8Array(2*x.length);
  for(var i = 0; i<x.length; i++){
    for(var j = 0; j<x.length;j++)
      product[i+j] += x[i]*y[j]
  }
  return product;
}

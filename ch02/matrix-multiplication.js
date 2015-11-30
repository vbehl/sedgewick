function multiply(m1,m2){
  var rows = m1.length,
      columns = m1[0].length,
      result = [];
  for(var i = 0; i < rows; i++){
    result[i] = new Uint8Array(columns);
    for(var j = 0; j < columns; j++){
      for(var k = 0; k < rows; k++){
        result[i][j] += m1[i][k] * m2[k][j]
      }
    }
  }
  return result;
}

var m1 = [[1,2],[3,4]],
    m2 = [[5,6],[7,8]];

console.log(multiply(m1,m2));

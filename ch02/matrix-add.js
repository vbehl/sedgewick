function add(m1,m2){
  var rows = m1.length,
  columns = m1[0].length,
  result = [];
  for(var i = 0; i < rows; i++){
    result[i] = []
    for(var j = 0; j < columns; j++)
      result[i][j] = m1[i][j] + m2[i][j]
  }
  return result;
}

var m1 = [[1,2],[3,4]],
    m2 = [[5,6],[7,8]];
    
console.log(add(m1,m2));

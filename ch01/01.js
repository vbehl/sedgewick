//Solve our initial problem by writing a Pascal program to reduce a given
//fraction x/y to lowest terms.
function gcd(a, b) {
  if (a < b) {
    var temp = b;
    b = a;
    a = temp;
  }
  if (a % b == 0)
    return b;
  return gcd(b, a % b);
}

function reduceFraction(x, y) {
  var div = gcd(x, y);
  return `${x/div}/${y/div}`;
}

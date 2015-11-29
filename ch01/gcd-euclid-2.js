//replacing recursive calls with a while loop
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (a % b != 0) {
    var t = a;
    a = b;
    b = t % b;
  }
  return b;
}

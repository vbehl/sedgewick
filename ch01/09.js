function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a % b == 0)
    return Math.abs(b);
  return gcd(b, a % b);
}

function gcd3(a,b,c){
  return gcd(gcd(a,b), c);
}

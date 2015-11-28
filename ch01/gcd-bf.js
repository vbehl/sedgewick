function gcd(a, b){
  var t = Math.min(a,b);
  while(t){
    if(a%t==0 && b%t==0)
      return t;
    t = t - 1;
  }
  return 1;
}

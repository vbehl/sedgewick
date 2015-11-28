function gcd(a,b){
    if(a<b){
      var temp = b;
      b = a;
      a = temp;
    }
    if(a%b == 0)
      return b;
    return gcd(b, a%b);
}

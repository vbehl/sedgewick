//binary gcd using Stein's algorithm
function gcd(x,y){
  if(x==y)
    return x;
  if(y == 0)
    return x;
  if(x == 0)
    return y;
  if(~x&1){
    if(y&1) //x is even, y is odd
      return gcd(x/2, y);
    return 2*gcd(x/2, y/2); //both x and y are even
  }
  if(~y & 1)
    return gcd(x, y/2); //x is odd, y is even
  if(x<y) //both x and y are odd
    return gcd((y-x)/2, x);
  return gcd((x-y)/2,y);
}

//replacing recursive calls with a while loop
function gcd(a,b){
  if(a < b){
    var temp = a;
    a = b;
    b = temp;
  }
  while(a%b!=0){
    var t = a;
    a = b;
    b = t % b;
  }
  return b;
}

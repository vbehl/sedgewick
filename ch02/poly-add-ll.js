//add polynomials that are in arranged in order of degree in O(n) time
//linked list used and 0 coefficient polynomial terms not stored

function LinkedList(){
  this._head = null;
}
LinkedList.prototype = {
  add: function(data){
    var node = {
      data: data,
      next: null
    }
    if(this._head==null)
      this._head = node;
    else{
      var current = this._head;
      while(current.next!=null)
        current=current.next;
      current.next = node;
    }
  },
  remove: function(index){
    var count = 0,
        current = this._head;
    if(index==0)
      this._head = this._head.next;
    else{
      while(count < index - 1){
        count++;
      }
      current.next = current.next.next || null;
    }
  },
  display: function(){
    var current = this._head;
    while(current!= null){
      console.log(current.data);
      current = current.next;
    }
  }

}


function addPolynomials(x,y){
  var xPointer = x._head,
      yPointer = y._head,
      result = new LinkedList(),
      xData, yData;
  while(xPointer!=null && yPointer!=null){
    xData = xPointer.data;
    yData = yPointer.data;
    if(xData.e == yData.e){
      result.add({c: (xData.c + yData.c), e: xData.e});
      xPointer = xPointer.next;
      yPointer = yPointer.next;
    }
    else if(xData.e < yData.e){
      result.add(xData);
      xPointer = xPointer.next;
    }
    else{
      result.add(yData);
      yPointer = yPointer.next;
    }
  }
  if(yPointer==null){
    while(xPointer!=null){
      result.add(xPointer.data);
      xPointer = xPointer.next;
    }
  }
  else if(xPointer==null){
    while(yPointer!=null){
      result.add(yPointer.data);
      yPointer = yPointer.next;
    }
  }
  return result;
}

var x = new LinkedList(),
    y = new LinkedList();
x.add({c: 3, e: 2});
x.add({c:-9, e: 4});

y.add({c: 9, e: 1});
y.add({c: 100, e: 2});

console.log(addPolynomials(x,y).display());

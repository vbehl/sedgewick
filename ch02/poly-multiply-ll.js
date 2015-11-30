//multiply polynomials that are in arranged in order of degree
//linked list used and 0 coefficient polynomial terms not stored

function LinkedList() {
  this._head = null;
}
LinkedList.prototype = {
  add: function(data) {
    var node = {
      data: data,
      next: null
    }
    if (this._head == null)
      this._head = node;
    else {
      var current = this._head;
      while (current.next != null)
      {
        current = current.next;
      }
      current.next = node;
    }
  },
  remove: function(index) {
    var count = 0,
      current = this._head;
    if (index == 0)
      this._head = this._head.next;
    else {
      while (count < index - 1) {
        count++;
      }
      current.next = current.next.next || null;
    }
  },
  display: function() {
    var current = this._head;
    while (current != null) {
      console.log(current.data)
      current = current.next;
    }
  },
  getNodeFromDegree: function(degree) {
    var current = this._head;
    while (current!=null) {
      if(current.data.e == degree)
        return current;
      current = current.next;
    }
    return null;
  }

}


function multiply(x, y) {
  var xPointer = x._head,
    result = new LinkedList(),
    yPointer, xData, yData, data, node;
  while (xPointer != null) {
    xData = xPointer.data;
    yPointer = y._head;
    while (yPointer != null) {
      yData = yPointer.data;
      data = {
        c: xData.c * yData.c,
        e: xData.e + yData.e
      }
      node = result.getNodeFromDegree(data.e);
      if (node!=null){
        node.c += data.c;
      }
      else{
        result.add(data);
      }
      yPointer = yPointer.next;
    }
    xPointer = xPointer.next;
  }
  return result;
}

var x = new LinkedList(),
  y = new LinkedList();
x.add({
  c: 3,
  e: 2
});
x.add({
  c: -9,
  e: 4
});

y.add({
  c: 9,
  e: 1
});
y.add({
  c: 100,
  e: 2
});

console.log(multiply(x, y).display());

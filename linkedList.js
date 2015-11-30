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

module.exports = {LinkedList};

Array.prototype.myCopyWithin = function(target = 0, start = 0, end = this.length) {
  if(target < 0) {
    target = this.length + target;
  };

  if(start < 0 ) {
    start = this.length + start;
  };

  if(end < 0 ) {
    end = this.length + end;
  };

  for(let i = start; i < end && target < this.length; i++) {
    // console.log(this[target])
    this[target] = this[i];
    target++
  }
  return this;
};


const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.myCopyWithin(3, 0, 2)); // ['a', 'b', 'c', 'a', 'b'];

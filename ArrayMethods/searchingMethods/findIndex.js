// findIndex() method accepts a testing callback function,
// that executes on every element of the array; 
// and returns the index of the first element which fulfills the testing function

// if Element not found, return -1;

Array.prototype.myFindIndex = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i])) {
            return i;
        }
    }
    return -1;
};

const arr = [3, 6, 9, 12];
const resultIdx = arr.myFindIndex(el => el % 2 === 0);
console.log(resultIdx);
// const resultIdx2 = arr.findIndex(el => el % 2 === 0);
// console.log(resultIdx2);


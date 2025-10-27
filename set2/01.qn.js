function orderedChain(arr) {
  let result = [];
  let sub = [];
  let temp = 0;

  let dup = [];
  let newArr = [];
  for (let num of arr) {
    if (!dup.includes(num)) {
      newArr.push(num);
    }
    dup.push(num);
  }

  for (let i = 0; i < newArr.length; i++) {
    sub = [newArr[i]];
    for (let j = i + 1; j < newArr.length; j++) {
      temp = newArr[i];
      for (let k = j; k < newArr.length; k++) {
        if (newArr[k] > temp) {
          sub.push(newArr[k]);
          temp = newArr[k];
        }
      }
      if (result.length > sub.length) result = result;
      else result = sub;
      sub = [newArr[i]];
    }
    sub = [];
  }

  return result;
}

console.log(orderedChain([10, 20, 15, 30, 22, 40]));
console.log(orderedChain([7, 9, 0, 2, 6, 9, 2, 8]));
console.log(orderedChain([10, 2, 5, 57, 8, 9, 24, 6, 24, 1]));
console.log(orderedChain([1, 2, 5, 57, 8, 9, 24, 6, 24, 1]));
console.log(orderedChain([75, 2, 5, 8, 9, 24, 3, 24, 1]));
console.log(orderedChain([10, 2, 5, 57, 8, 9, 24, 6, 24, 1]));
console.log(orderedChain([2, 5, 7, 8, 9, 2, 6, 24, 1]));
console.log(orderedChain([47, 8, 9, 24, 6, 24, 1]));
console.log(orderedChain([8, 2, 5, 57, 8, 9]));
console.log(orderedChain([5, 57, 8, 9, 24, 6, 24, 1]));
console.log(orderedChain([16, 12, 5, 7, 8, 9, 1]));
console.log(orderedChain([1, 10, 24, 6, 24, 10]));
console.log(orderedChain([7, 8, 19, 24, 6, 24, 1]));
console.log(orderedChain([34, 5, 3, 25, 5, 2]));
console.log(orderedChain([35, 3, 5, 2, 2, 5, 2, 3, 3]));

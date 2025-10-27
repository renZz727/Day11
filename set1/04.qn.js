function combineObject(obj1, obj2) {
  const newObj = new Object();
  for (key in obj1) newObj[key] = obj1[key];
  for (key in obj2) newObj[key] = obj2[key];
  return newObj;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = combineObject(obj1, obj2);

console.log(obj1);
console.log(obj2);
console.log(combinedObj);

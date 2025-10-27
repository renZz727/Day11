function objectEquality(obj1, obj2) {
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key])
      return "Not Equal";
  }
  return "Equal";
}
console.log(objectEquality({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log(objectEquality({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(objectEquality({ a: 2, b: 3 }, { a: 3, b: 3 }));

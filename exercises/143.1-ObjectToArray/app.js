function getAllKeys(obj) {
  // your code here
  let r = []
  for(let key in obj){
      r.push(key)
  }
  return r
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]

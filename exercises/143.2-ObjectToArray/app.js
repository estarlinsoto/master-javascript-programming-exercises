function listAllValues(obj) {
  // your code here
  let r = []
  for(let value in obj){
      r.push(obj[value])
  }
  return r
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]

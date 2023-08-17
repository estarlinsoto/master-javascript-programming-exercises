function convertObjectToList(obj) {
  // your code here
  let r = Object.entries(obj)
  return r      
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]

function joinArrayOfArrays(arr) {
  // your code here
  let r = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
          r.push(arr[i][j])
    }  
  }
  return r
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']

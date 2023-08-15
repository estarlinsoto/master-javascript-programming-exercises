function joinArrays(arr1, arr2) {
  // your code here
  let r = arr1.concat(arr2);
  return r;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

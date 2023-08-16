function getLargestElement(arr) {
  // your code here
  if(arr.length < 1){return 0}
  let r = Math.max(...arr);
  return r;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
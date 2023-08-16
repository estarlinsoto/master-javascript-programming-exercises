function computeSumOfAllElements(arr) {
  // your code here
  let r = 0
  arr.forEach((element) =>  {
    r += element
  });
 
  return r;

}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

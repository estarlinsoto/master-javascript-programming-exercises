function getElementsAfter(array, n) {
  // your code here
 let r =  array.slice( n + 1)
 return r;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']

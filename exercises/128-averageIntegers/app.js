function average(arr) {
  // your code herer 
  return sum(arr) / arr.length

}

function sum(arr) {
  // your code here

  let r = 0
  arr.forEach(element => {
   r += element
 });

 return r
}

console.log(average([1, 2])); // --> 1.5

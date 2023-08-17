function transformFirstAndLast(array) {
  // your code here
  let last = array[array.length-1]
  let firts = array[0]
  let obj = {[firts]: last}
  return obj
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }

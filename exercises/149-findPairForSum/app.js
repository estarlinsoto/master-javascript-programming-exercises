function findPairForSum(array, number) {
  // your code here
  let cont = -1
  let r =[];

  for(let i = 1; i < array.length; i++){
    if( array[cont] + array[i] === number){
      r.push(array[cont])
      r.push(array[i])
    } 
    
  
  cont++  
  }
  return r
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

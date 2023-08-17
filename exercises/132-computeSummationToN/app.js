function computeSummationToN(n) {
  // your code here
  let n1 = 0;
  let n2 = n ;
  let r = 0;
  
  while(n1 < n2){
    r += n1;
  }
  return r
}

let output = computeSummationToN(6);
console.log(output); // --> 21


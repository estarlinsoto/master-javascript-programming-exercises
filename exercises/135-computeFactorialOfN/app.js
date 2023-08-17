function computeFactorialOfN(n) {
    // your code here
    let r = 1;
  for(let i = 1; i < n+1; i++ ){
    r *= i;
  }
    return r;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24

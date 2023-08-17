function multiply(num1, num2) {
    // your code here
    let r = 0
    let n1 = Math.abs(num1)
    let n2 = Math.abs(num2)
    while(n1 > 0){
      n1--
      r += n2 
    }
    return r
}

let output = multiply(4, 7);
console.log(output); // --> 28

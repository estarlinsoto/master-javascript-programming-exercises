function modulo(num1, num2) {
    // your code here
    let a = num1 / num2;
    a = Math.round(a)
    let r = num1 -(a * num2) 
    return r;
}

let output = modulo(25, 4);
console.log(output); // --> 1

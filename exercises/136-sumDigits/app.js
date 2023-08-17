function sumDigits(num) {
    // your code here
    let str = num.toString()
  let r = 0;
  let x = 0
 for(let i = 0; i < str.length; i++){
  if(str[i] === '-'){
    continue;
  }
  x = Number(str[i]) 
    r = r + x;
 }
 if(str[0] === '-'){
  r = r -  (str[1] * 2 )
 }
 return r
}

let output = sumDigits(-316);
console.log(output); // --> 4

function isEvenWithoutModulo(num) {
    // your code here
    let a = num / 2
  a = Math.floor(a)
  let r = num -(a * 2) 
  if( r === 0 ){
    return true
  }else{return false}
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true

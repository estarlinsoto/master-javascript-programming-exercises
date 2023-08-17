function isOddWithoutModulo(num) {
    // your code here
    let a = num / 2
  a = Math.floor(a)
  let r = num -(a * 2) 
  if( r === 0 ){
    return false
  }else{return true}
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true

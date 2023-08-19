function isRotated(str1, str2) {
    // your code here
    let ans = str1.substring(str1.length-4, str1.length ) +
    str1.substring(0, str1.length-4);
  
      if(ans === str2){
        return true
      }else{return false}
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  

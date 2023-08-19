function getStringLength(string) {
    // your code here
    let r = 0
    for(let char  in string){
      char = 1
     r +=  char
  }
  return r
}

let output = getStringLength('hello');
console.log(output); // --> 5

function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }
  let r = 1 
        arr.forEach((element) =>  {
          r *= element
        });
       
        return r;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

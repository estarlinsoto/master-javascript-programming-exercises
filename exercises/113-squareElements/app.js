function squareElements(arr) {
  // your code here
  let r =[]
        arr.forEach((element) =>  {r.push(element * element)});
       
        return r;
  
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

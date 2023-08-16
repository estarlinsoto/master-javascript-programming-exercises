function filterOddElements(arr) {
  // your code here
  let r =[]
        arr.forEach((element) =>  {
          if(element %2 === 1){
          r.push(element)
        }
        });
       
        return r;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

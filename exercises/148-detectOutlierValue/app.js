function detectOutlierValue(string) {
    // your code here
    let reges = `(.{${2}})`;
    let parsed = new RegExp(reges);
    let arrPar = []
    let arrImpar = []
    let pCont = 0
    let iCont = 0
    let cont = 0
    let arr = string.split(parsed)
  
  for(let char in arr){
    if(arr[char] === ""){continue}
    cont++
  
    if(arr[char] %2 == 0 ){ 
      arrPar.push(arr[char])
      pCont = cont
  
  }else if(arr[char] %2 != 0) {
    arrImpar.push(arr[char]) ,iCont=cont
  }
  }if(arrPar.length > arrImpar.length){
  return iCont;
  }else {return pCont }
  
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2

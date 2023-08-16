function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  
  let p =  Infinity;
  let r = [];
  if(arr.length === 0 ){
    return 0;
  }

 for(let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      continue;
    }
    else{r.push(arr[i])}
 }

     let res = Math.min(...r)
     if(res === Infinity){
      return 0;
     }else{return res}

}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

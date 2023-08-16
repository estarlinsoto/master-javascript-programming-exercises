function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let p = -Infinity;
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
  
       let res = Math.max(...r)
       if(res === p){
        return 0;
       }else{return res}
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

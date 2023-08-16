function removeOddValues(obj) {
    // your code here
    for(let key in obj){
      if(obj[key] % 2 === 1){
        delete obj[key];
      }
    }
    return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

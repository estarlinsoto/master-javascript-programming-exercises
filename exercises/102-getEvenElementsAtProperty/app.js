function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = [];
    if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++){
          if(arr[i] % 2 === 0){
            r.push(arr[i])
          }
    }
    return r;
  }else {return []}
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

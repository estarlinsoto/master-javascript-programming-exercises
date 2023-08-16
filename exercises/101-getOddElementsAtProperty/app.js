function getOddElementsAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = [];
    if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++){
          if(arr[i] % 2 === 1){
            r.push(arr[i])
          }
    }
    return r;
  }else {return []}
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

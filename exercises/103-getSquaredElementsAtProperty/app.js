function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = [];
    let p = 0
    if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++){
        p = Math.pow(arr[i], 2)
        r.push(p)
    }
    return r;
  }else {return []}
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

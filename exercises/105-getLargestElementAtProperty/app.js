function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = 0;
    if(!Array.isArray(arr) || arr.length === 0){
      return [];
    }

    if(Array.isArray(arr)){
      r = Math.max(...arr)
        return r;
    }else 
    {return []}
}


let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

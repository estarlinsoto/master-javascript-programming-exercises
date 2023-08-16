function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    if(!Array.isArray(arr) || arr.length === 0){
      return [];
    }
    arr.splice(arr.length - 1, 1)
    return arr;
    
}
let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]

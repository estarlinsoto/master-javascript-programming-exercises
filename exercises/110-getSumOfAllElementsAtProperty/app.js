function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
   
    let r = 0;
    let arr = obj[key];
    if(!Array.isArray(arr) || arr.length === 0 ){
        return 0;
      }
    arr.forEach((e) => {r += e })
    return r
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

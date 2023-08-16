function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = 0;
    if (!Array.isArray(obj[key]) || (obj[key].length === 0)) {
      return [];
    }

    if(Array.isArray(arr)){
      r = Math.min(...arr)
        return r;
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

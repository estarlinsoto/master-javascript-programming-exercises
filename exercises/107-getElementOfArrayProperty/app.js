function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let arr = obj['key'];
    if(!Array.isArray(arr) || arr.length === 0){
      return undefined;
    }
   return arr[index];

}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'

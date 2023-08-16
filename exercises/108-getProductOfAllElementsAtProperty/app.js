function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let x =1
    
    if(!Array.isArray(arr) || arr.length === 0 ){
      return 0;
    }else{for(let i = 0; i < arr.length; i++){
      x = x * arr[i]
    } return x;
  }}
    

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

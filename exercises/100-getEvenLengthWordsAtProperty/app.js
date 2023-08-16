function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let arr = obj['key'];
    let r = [];
    if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++){
          if(arr[i].length % 2 === 0){
            r.push(arr[i])
          }
    }
  }return r;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

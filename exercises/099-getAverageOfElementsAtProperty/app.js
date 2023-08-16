function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let r = 0;
    let cont = 0;
    let arr = obj['key']
    
    if(Array.isArray(arr) && arr.length > 0){
    for(let i = 0; i < arr.length; i++){
        cont++;
        r += arr[i]
    }
    return r / cont
  }
  return 0;
    

}
// Write your function here
const getElementsThatEqual10AtProperty = (obj, key) => {
    let xs = key;
    let r = [];
    if(Array.isArray(obj['key'])){
     r = obj['key'].filter(x => x === xs)

}
    
    return r
}

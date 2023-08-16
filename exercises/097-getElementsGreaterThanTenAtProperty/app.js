// Write your function here
const getElementsGreaterThan10AtProperty = (obj, key) => {
    let r = [];
    if(Array.isArray(obj['key'])){
     r = obj["key"].filter(x => x > 10)
    }
    return r;
}
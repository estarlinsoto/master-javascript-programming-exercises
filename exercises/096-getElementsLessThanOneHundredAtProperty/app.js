// Write your function here
const getElementsLessThan100AtProperty = (obj, key) => {
    let r = [];
    if(Array.isArray(obj['key'])){
     r = obj["key"].filter(x => x < 100)

}
    return r
}
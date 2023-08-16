// Write your function here
const getLastElementOfProperty = (obj, key) => {
    let r = 0;
    if(Array.isArray(obj[key])){
        return r = obj[key].pop()

    }else {return undefined}
    
}
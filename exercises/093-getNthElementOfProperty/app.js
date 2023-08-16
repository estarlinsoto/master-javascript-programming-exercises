// Write your function here
const getNthElementOfProperty = (obj, key, num) => {
    if(Array.isArray(obj[key])){
        return obj[key][num]
    }else{return undefined}
}

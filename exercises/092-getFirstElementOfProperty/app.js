// Write your function here
const getFirstElementOfProperty = (obj, keys) => {
    if( Array.isArray(obj[keys])){
        return obj[keys][0]
    }else{return undefined}
}
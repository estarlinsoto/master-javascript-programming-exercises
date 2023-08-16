// Write your function here
const getOddLengthWordsAtProperty = (obj, key) => {
    let r = [];
    if(Array.isArray(obj['key'])){
        r = obj['key'].filter(item => item = item.length % 2 === 1);
        return r;
    }else{return r}
}
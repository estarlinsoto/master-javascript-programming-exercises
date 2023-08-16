// Write your function here
const getIndexOf = (c, string) => {
    let r =  -1;
    for(let i = -1; i < string.length; i++){
        if(string[i] === c){
            r = i;
            break;
        }
    }
        return r;
}
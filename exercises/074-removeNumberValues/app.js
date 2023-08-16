function removeNumberValues(obj) {
    // your code here
    for(let key in obj){
        let x = obj[key];
        if(obj[key] > -999){
            delete obj[key];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

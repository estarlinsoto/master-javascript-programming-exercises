function removeFromFrontOfNew(arr) {
    // your code here
    let r = arr.slice(1,arr.legth);
    return r;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

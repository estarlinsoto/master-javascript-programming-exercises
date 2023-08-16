function findSmallestElement(arr) {
    // your code here
    if(arr.length < 1){return 0}
    let r = Math.min(...arr)
    return r;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
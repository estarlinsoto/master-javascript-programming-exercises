function addToBackOfNew(arr, element) {
    // your code here
    let x = [];
    x.push(element)
    console.log(x)
    let ar = arr;
    
    let r = ar.concat(element)
    return r;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

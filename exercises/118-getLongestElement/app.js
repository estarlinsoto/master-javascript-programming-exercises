function getLongestElement(arr) {
    // your code here
    if(arr.length === 0){
        return "";
    }
    let c = arr[0].length;
    let r = arr[0]
    for(let i = 1; i < arr.length; i++){
        let max = arr[i].length
        if(max > c){
            r = arr[i]
            c = max;
        } 
    }
    return r;

}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

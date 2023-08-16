function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }
    let c = arr[0].length;
    let r = arr[0].length;
    for(let i = 1; i < arr.length; i++){
        let max = arr[i].length
        if(max < c){
            r = arr[i].length
            c = max;
        } 
    }
    return r;

}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

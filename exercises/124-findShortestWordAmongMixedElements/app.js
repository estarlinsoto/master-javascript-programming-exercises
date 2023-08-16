function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0 ){
        return "";
    }
    let c = arr[0]
    let r = arr[0]
    
    for(let i = 1; i < arr.length; i++){
        let max = arr[i].length
        if(c > max ){
            r = arr[i]
            c = max;
        } 
    }

    if(r > 0){return ""}
    return r;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

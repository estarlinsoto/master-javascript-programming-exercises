// Write your function here
const computeAverageOfNumbers = (arr) => {
    let r = 0;
    for(let i = 0; i < arr.length; i++){
        r += arr[i];
    }
    if(r === 0){return 0;}
    return r / arr.length;
}
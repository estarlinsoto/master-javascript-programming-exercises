function filterOddLengthWords(words) {
    // your code here
    let result = words.filter(len => len = len.length % 2 === 1)
    return result;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']

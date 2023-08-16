function filterEvenLengthWords(words) {
    // your code here
    let res = words.filter(element => element = element.length % 2 === 0);
    return res;    
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

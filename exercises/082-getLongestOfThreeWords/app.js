function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let r = word2;
    if(word1.length >= word2.length && word1.length >= word3.length){ 
        r = word1
        
    }else if(word3.length >= word2.length) {
        r = word3
    
    }else{return r;}
    return r;


}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

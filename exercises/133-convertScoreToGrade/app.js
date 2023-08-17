function convertScoreToGrade(score) {
    // your code here
    let r = "";
    if(score <= 100 && score >= 90){
     r += 'A'
    }else if(score <= 89 && score >= 80){
     r += 'B'
    }else if(score <= 79 && score >= 70){
     r += 'C'
    }else if(score <= 69 && score >= 60){
     r += 'D'
    }else if(score <= 59 && score >= 0){
     r += 'F'
    }else {return "INVALID SCORE"}
    return r;
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'

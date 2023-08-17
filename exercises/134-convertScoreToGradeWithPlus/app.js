function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let r = "";
  if(score <= 100 && score >= 98){ r += 'A+'
  }else if(score >= 93 && score <= 97){
    r += 'A'
   }else if(score <= 92 && score >= 90 ){
   r += 'A-'
  }else if(score <= 89 && score >= 88){
    r += 'B+'
   }else if(score >= 83 && score <= 87){
     r += 'B'
    }else if(score <= 82 && score >= 80 ){
    r += 'B-'
   }else if(score <= 79 && score >= 78){
    r += 'C+'
   }else if(score >= 73 && score <= 77){
     r += 'C'
    }else if(score <= 72 && score >= 70 ){
    r += 'C-'
   }else if(score <= 69 && score >= 68){
    r += 'D+'
   }else if(score >= 63 && score <= 67){
     r += 'D'
    }else if(score <= 62 && score >= 60 ){
    r += 'D-'
   }else if(score <= 59 && score >= 0){
   r += 'F'
  }else {return "INVALID SCORE"}
  return r;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

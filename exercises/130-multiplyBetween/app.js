function multiplyBetween(num1, num2) {
    // your code here
    if(num1 > num2){
        return 0;
      }else{
      let n1 = num1 ;
      let n2 = num2 ;
      let r = 1;
      
      while(n1 < n2){
         r *= n1
         n1++
          
      }
      return r
    }
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24

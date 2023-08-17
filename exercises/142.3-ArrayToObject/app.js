function transformEmployeeData(array) {
  // your code here
  let r = []
  
  for(i of array){
    let obj = {}
    for(j of i){
      obj[j[0]] = j[1]
    } 
    r.push(obj)
  }
 
 
  return r;
}

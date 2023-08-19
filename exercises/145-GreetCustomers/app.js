let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
	for(let key in customerData){
    
    if(key === firstName && customerData[key].visits === 1){
     return greeting += `Welcome back, ${key}! We're glad you liked us the first time!`;
    
    }else if(key === firstName && customerData[key].visits > 1){
      return greeting += `Welcome back, ${key}! So glad to see you again!`;

     }
    
  
  }
  return "Welcome! Is this your first time?"
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

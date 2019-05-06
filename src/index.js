import  numeral from 'numeral'; 

var courseVal=  numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseVal} for this awesome course`);
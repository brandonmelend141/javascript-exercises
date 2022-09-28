const add = function(num1,num2) {

  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  const addNum = numbers.reduce((total,number)=>total + number,0);
  return addNum;
};

const multiply = function(numbers) {
  const timesNum = numbers.reduce((total,number)=>total * number,1);
  return timesNum;
};

const power = function(num,power) {
	return num ** power;
};

const factorial = function(value) {
  let total = value 
  if(value === 0){
    return 1;
  }
  
	for(let i = 1; i < value;i++){
    total *= i;
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

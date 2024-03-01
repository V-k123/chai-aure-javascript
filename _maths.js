// 1:Constant
//*-Math.PI:Reprsent the mathematical constant pi

const piValue=Math.PI;
console.log(piValue);

//?Math.abs(): the Math.abs() static method returns the absolute value of a number.
//the absolute value of  a number.
//or in simple ,how far the number is from 0.it will always positive
console.log(Math.abs(5));
console.log(Math.abs(-3))

//? Math.round(x):Rounds a number  to the nearest integer.
const roundeValue =Math.round(3.7);
console.log(roundeValue)


//math ceil:
const ceilValue=Math.ceil(3.2);
console.log(ceilValue)

//Math.floor()
const floorValue=Math.floor(3.7);
console.log(floorValue);

//?Math.trunc(x):Rrturns integer part of x :
const truncValue=Math.trunc(5.7)
console.log(truncValue);

// todo Math.trunc() and Math.sign() were added to javascript 2015-Es6.

//? Math.pow(x,y):returns the value of x to the power of y 
console.log(Math.pow(2,3));
console.log(2**3)


//? Math.sqrt():Math.sqrt(x)returns the square root of x :
let squareRoot=Math.sqrt(25);
console.log(squareRoot)

//? Math.log(x) returns the natural alogirtham of x .
let logResult=Math.log(1);
let logResult2=Math.log(2)
console.log(logResult);
console.log(logResult2);

//!Generate Random number
//?Math.random(): Math.random() returns a random number between 0(inclusive), and 1(exclusive)
console.log((Math.random()*100).toFixed(3))
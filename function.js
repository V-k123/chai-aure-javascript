//javascript function
// in javascript a function is a block of reusable code that performs  specific task or set of task.function are used to organize code into modular and managble pieces ,promote code reuse and make program more readable
function functionName(parameters){
    //code to be executed
    return XPathResult;// optional return statement
}

//3 student at a same time wants to find the sum of two numbers

var a =5,b=10;
let sum1=a+b;
console.log(sum1);


var a =15,b=10;
let sum2=a+b;
console.log(sum2);


var a =15,b=20;
let sum3=a+b;
console.log(sum3);



//let make a reusable code
function sum( a ,b){
    return a+b;


}
console.log(sum(15,5))
console.log(sum(20,5))

// syntax -function Declaration
function greet(){
    console.log("welcome india !");
}

///syntax -function Invocation
function greet(){
    console.log("welcome india !");
}
greet();

// 1.write a function to find the sum of two numbers.

// function definition
function sum(){
    
    console.log(a+b);
}
sum(5,10);


// syntax -function parameter
// function greet(parameter1,parameter2){
//     console.log("javascript");
// }
// greet(argument1,argument2)

//write a javascript program that defines a function called greet to welcome individual to the javascript course.the function should take a  name parameter and output the message "hello[name],welcome to javascript course".call the function twice once with the argument "js" and once with the argument "ram".



function greet(name){
    console.log("hello "+ name + " ,Welcome to javascript course");
}
greet("ram")
greet("shyam")

//  function expressions
// A function expression is a  way to define a function as part of an expression.it can be either named or anonymous . if it ,s named it becomes a  named function expressions.


var  myName=function (a,b){
    console.log(a+b);
};
myName(10,5)

//returning a sum of two numbers 
function sum(a,b){
    return a+b;

}
var result=sum(5,5);
console.log(result);
console.log("the sum of two number is :" +result);

//IIFE -immediately invoked function Expressions , is a javascript function that is defined and executed immediately after its creation.It is a way to create a self-contained block of code that doesn,t interfere with the surrounding  code and  executes immediately
SyntaxError(function(){

})();
// practice time (IIFE with parameter)

  var result=(function(a,b){
    console.log(a+b);
    return a+b;
})(5,10);
console.log("the sum of two number is " + result);

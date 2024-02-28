//LET AND CONST -EcmaScript 2015
//let keyword: the let keyword is used to declare variable with block scope.variables declared with let are mutable, meaning their values can be reassigned.

// const Keyword: the const Keyword is used to declare variables with block scope,but once a value is assigned to a const variable ,it cannot be reassigned . const variables are immutable.

// var myFavWorldBestName="vivek";
// myFavWorldBestName="samar";
// console.log(myFavWorldBestName);

// const world="vivek";
// console.log(world);


// //? 1st show what var can do
// var name ="thapa";
// if(true){
//     var name ="vinod";
//     console.log(name);
// }
// name="kushwaha";
// console.log(name);

//?ex2:with the help of let keyword
let name="vivek";
if(true){
   let name="kushwaha";
}
name="samar";
console.log(name)


//template literal
//?In ECMAScript 6 (ES6), template strings,also known as template Literals,provide a convenient and flexible way to create strings in javascript .Template Strings are enclosed in backticks('')rather than single or double quotes.

let firstName="samar ";
let lastName="maurya";

// let fullName=firstName+lastName;
let fullName =`${firstName} ${lastName}`;
console.log(fullName);

//? String Interpolation : template strings support string interpolation allowing you to embed expressions directly within the string .Interpolated expressions are enclosed in ${}
let age=22;
//String interpolation with variable 
let message=`I am ${age} year old`;
console.log(message);

let multiLineString=` this is a multi-Line string using template literals it,s much cleaner and easier to read`;
console.log(multiLineString);
//? Practice time
let num=5;
console.log(`5 * ${num}= ${5 * num}`);

// DEFAULT PARAMETERS
//In ECMAScript 6(ES6),default parameters were introduced ,providing a more concise way to handle function parameter defaults,default parameters allow you to specify default values for function parameters in the function declaration itself .if a parameter when the function is called,the default value is used.

//?default function parameters allow named parameters  to be intialized with default values if no value or undefined is passed.
// write a function to find sum of two numbers?what if during function call user only passed one argument ?

function sum(a,b=12){
    return a+b;
}
console.log(sum(5));

//?In ECMAScript 6(ES6),arrow functions ,also known as fat arrow function ,were  introduced as a concise way to write anonymous function.
const sum1=function (a,b){
    let result =`the sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
}
sum1(5,5);

const sum2=(a,b)=>{
    let result =`the sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
};
sum2(5,17);

const sum3=(a,b)=>console.log(`the sum of ${a}and ${b} is ${a+b}`);
sum3(5,5);


//todo notes 
//?1:if the function body consists of a single expressions ,the braces{} and the return keyword can be omitted.

const sum4=(a,b)=>`the sum of ${a} and ${b} is ${a+b}`;
console.log(sum4(5,4));
//?2:if there is only one parameter the  parentheses() around the parameter list can be omitted .
const square =a => `the square of ${a} is ${a*a}`;
console.log(square(5))

//?3:if there are no parameters ,use an empty set of parenthese().
const greet=() =>console.log("hello india ! ");
greet();
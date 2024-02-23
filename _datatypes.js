//  # In javacript ,values and variables are fundamental  concept that form the basis of programming.
//  #values: A value is a piece of information that program can work with.it can be a number ,text,true ,false,or more complex data .A

//  # variable : A variable is a container that holds a value .it has a name and can be used to store and mainuplate data in a program.

var myAge=21;
console.log(myAge);

var  my_firstName ="john";
console.log(my_firstName)


var _myLastNames$ ="vivek";

console.log(_myLastNames$);


var $cityName="New york";

console.log($cityName);


// var 123myAge =25;
// explain- this is not a valid variable name .it start  with a dollar sig and the subsequent Character include letter .follows javascript naming rules


// Number 

var myFavNum=5;
console.log(myFavNum);

``
//  String
var myName="vivek kushwaha";
console.log(myName);

//Boolean
var isRaining = false;
var areYouAwesome=true;
console.log(isRaining);



//undefined;
// var vinod;
// console.log(vinod);
// null
var badMemories =null;
console.log(badMemories);


// what is the purpose of typeof operator in javascript
var myName="vivek";
console.log(myName);
console.log(typeof myName);


// convert a string to a number 
var myNum= "10";
console.log(typeof +myNum)
console.log(typeof Number(myNum))
// convert  a number to String
let str=5;
console.log(typeof String(str));
console.log(typeof (str + ""));



// to check if a non empty String is truthy or falsy in javascript ,we can directly use if statement.
var myName="vivek";
if(myName){
    console.log("this is truthy")
} else{
    console.log("its is falsy");
}



//parseInt: definition parseInt is used  to parse  a string and convert  it to an intger (whole number).

const myString ="42";
const myNumber =parseInt(myString);
console.log(myNumber)
// parse float:definition  parsefloat is used  to parse a String and convert it to a floating point number (decimal number).
const myStrings ="42.5";
const myNumbers=parseFloat(myStrings);
console.log(myNumbers)


//NaN ==NaN ,why is it false?
if(NaN == NaN ){
    console.log("both are equal");
} else {
    console.log("both are not equal");
}
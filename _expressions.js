//Assignment operators
var myName =15;
// assign the values 15 to the variable myName

// arithmetic 
var  x =5;
var y =10;
var sum =x+y;
console.log(sum)

//what will be the output 
var result="hello"/2;
console.log(result);

var result =0.1+0.2;
console.log(result);

var result=55*"hello";
console.log(result);


var str1="hello";
var str2="world";
var str3=str1+str2;
console.log(str3);


// comparison operator

console.log(5 === 5);
console.log( 5 !=5);
console.log(5>2);
   console.log(5<2);
console.log(10<=10);


// let num=1;
// let num2="1";
// if(num1 === num2){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }



//there are the three main logical operator : && (logical AND), ||(logical OR),and !(logical NOT).
// Logical AND (&&): return true if both operands are true,otherwise,it returns false.

var x=5;
var y =10;
console.log(x<y && y>x);
//Logical OR(||): Returns true if at least one of the operands is true ,otherwise,it return false
var a =15;
var b =0;
console.log(a>b || b>a);

//Logical NOT(!)
var isOpen=false;
console.log(!isOpen);

// Q:write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license?
var age =18;
var  hadDrivingLicense=true;

 console.log(age>=18 && hadDrivingLicense ==true);

 //ternary operator
//  syntax : condition ? expressionIfTrue : expressionIfFalse;
var age =15;
var result=age>=18?'yes':'No';
console.log(result);






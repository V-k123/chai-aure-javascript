var temp=25;
if(temp>30){
    console.log("let's go to beach");

} else if(temp>20 && temp >10) {
    console.log("watch Tv at Home");
}else{
    console.log("so jawo")
}

// message saying they are eligible to vote .
//?if the person is younger than 18,not a citizen ,or not registerd to vote,display message saying they are not eligible to vote.
//?if the person is 18 or older but not a citizen ,but not registerd to vote ,display a message saying they are not eligible due to registration status.
//extended voting eligiblity checker with additional conditions

// Assume the user,s age, citizenship status and registration status as input 

let user=22;
let isCitizen=true;
let isRegistered=false;
if(user >=18){
if(isCitizen){
    if(isRegistered){
        console.log("you are eligible to vote");

    }else{
        console.log("you are not eligible due to registration status");
    }

}else{
    console.log("you are not eligible dut the citizenship");
}
}else{
    console.log("you are not eligible to vote");
}

// write a program to check if a number is even or odd.
var num=6;
if(num%2==0){
    console.log("num is even");
} else {
    console.log("num is odd")
}

// write a number to check if a number is positive ,negative,or zero.
var num=12;
if(num===0){
    console.log("number is zero");
} else if(num>0){
    console.log("number is positive number");
} else{
    console.log("number is negtive number");
}


//? Switch statement:the switch statement is used to perform different actions based on different conditions.
//explain how the switch statement works and what will be the output when the variable day is set to diffrent values.

var day ="friday";
switch(day){
  case "monday":
    console.log("today is monday");
    case "friday":

        console.log("omg let go for party today");
       break;
        
        case "sunday":
            console.log("let go for party");

            default:
                console.log("no conditon match today");
}

// //while loop
// while(condition){
//     // code to be executed as long as the condition is true
// }

// //do-while loop
// do{
// // code to be executed at least once
// } while(condition);
        
// //for loop
//  for(intializer; condition; iteration){
//     // code to be executed
//  }
//while loop
// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// // do while loop
// let m=1;
// do{
//     console.log(m);
//     m++;
// } while(i<=10)

// //for loop
// for(let i =1;i<=10; i++){
//     console.log(i);
// }


// simple while loop count from 1to 10;
var num=1;
while(num<=10){
    console.log(num);
    num++;
}

//  do while loop 
var num=1;
do{
    console.log(num);
    num++;

}while(num<=10)

//practice
// for loop

for(var num=1; num<=10; num++){
    var sum=5;
    console.log(sum +"*" + num +"="+ sum*num)
}

// let userInput;
// let positiveNumber;
// do{
//     userInput=prompt('enter any positve number');
//     positiveNumber=parseFloat(userInput)
// }while(isNaN(positiveNumber)||positiveNumber<0);
// console.log("you are entered a valid positive number:",positiveNumber);


//!practice:
//calculate the sum of numbers from 1 to 10 using a for loop
    
var sum=0;
for(var num=1; num<=10; num++){
    debugger;
        var sum =sum+num;
    }
    console.log(sum);


    //write a program to check if a number is prime.
    var num=12;
    var isPrime=true;
    for(var i =2; i<num; i++){
        if(num%i==0){
            isPrime=false;
            break
        }
    }
    if(isPrime){
        console.log("num is prime");

    } else{
        console.log('Num is not prime')
    }

    //!1:program to check if a year is a leap year
    //if a year is divisible by 4 and not divisible by 100,or 
    // if a year is divisible by 400

    var year =2002;
    if((year %4===0 && year % 100===0)||(year%400===0)){
        console.log(year , "it is a leap year ");

    } else{
        console.log(year ,"it is not leap year");
    }

    //!2: drawing patterns with Asterrisk:

    for(var i=0; i<=5; i++){
        var patterns="";
        for(var j =0; j<=i; j++){
            patterns =patterns+"*";
        }
        console.log(patterns);
    }

    
const str="hello World";
console.log(str.length);

const text="samar maurya";
// console.log(text.indexOf("samar "));

let strArr=Array.from(text);

let strMap=strArr.map((curElem, index)=>` ${curElem} - ${index}`);
console.log(strMap);

let text3 ="hello javaScript,Welcome to our world best JavaScript course";


let  index=text3.lastIndexOf("javaScript");
console.log(index);

//*start position for the search can be specified
let text4="hello samar maurya how are u";
let result=text4.startsWith("hello");
console.log(result);

//?endWith():the endsWith()method returns true if a string end with a specified .otherwise it returns false:


//extracting the string
//?a:slice() extracts a part of a string and returns the extracted part in the new string
// slice() extracts a part of a string and returns the extracted part in a new string.
// 1:javascript counts position from zero.
// 2:slice() extracts up to but not including indexEnd.

let text5="hello javascript ,welcome to our world best javascript course";

let result2=text5.slice(6,13);
console.log(result2);

//?substring:Extract a portion of the string based on starting and ending indices.
//camelcase is used to separate words ,substring is not be intended as sub String is  not to be intended as sub string but as substring

//syntax
//substring(indexStart)// index starts with 0
//substring (indexStart, indexEnd)

//substring() extracts  a part of string and returns the extracted part in a new string.
// 1:javascrit counts positions from zero.
// 2:substring() extracts up to but not including indexEnd.

let text6="hello javascriot ,welcome to our world best javascript course";
let resu=text6.substring(6);
console.log(resu);

// what is the output for the following code?
// let text2="hello Javascript "
//  let resu1=text2.slice(1);
//  let resu1=text2.substring(1);
//  console.log(resu1);
//  let resu1=text2.replaceAll("javascript","vinod");
// console.log(resu1);


//?charAt():the charAt() method returns the character at a specified index(position ) in a string
// let text2="hello vivek kushwaha welcome to javascript course";
// let result9=text.charAt(6);
// console.log(result9);


let text2="hello welcome to javascript course";
let result9=text.charCodeAt(6);
console.log(result9);

// todo ES2022 introduced the string method at();
//the at() method returns the character at a specified index(position)
// in a String. it allows the use of negative indexes while charAt() do Not


//?trim Removes whitespace from both end of the string .
// const str3="       hello , world!  "
// let trimStr =str3.trim();
// console.log(trimStr);

// //?split:Split the string into an array of substrings based on a specified delimiter.
// const str4="apple,orange,banana";
// let strArr1=str4.split(",").reverse().join();
// console.log(strArr1);

//write a javascript function that prints the letters 'a'
//  through 'z' in the console.you should use a loop to iterate through the letters and print each one on a new line.
// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// console.log(String.fromCharCode(122));


// for(let char=97; char<=122;char++){
//     console.log(String.fromCharCode(char));

// }

//!: write a function to count the number of vowel in a string?

//!:write a function to check if all the vowels present in a s tring or not?
const countVowels = (str)=>{
    const vowles="aeiou";
    let count=0;
    for(let char of str){
        console.log(char);
        if(vowles.includes(char)){
            count++;

        }
    }
    return count ;

};
console.log(countVowels("hello vivek kushwaha"));


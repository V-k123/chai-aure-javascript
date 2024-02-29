//Arrays in Javascript
//Array-like object-Any object with length property and use indexes to access items.
//Arrays as objects : Arrays in javascript are a specific type of object that has numeric keys (indices)and a length property .the indices are automaticallymaintained ,and the length property is automatically updated when you add or remove elements from the array.
//type of operator :the type of in javascript returns "object" for both arrays and regular objects

//? Arrays in javascript can be created using the array constructor or with arrys literals (square bracker[]).

//?using Array constructor
let fruits=new Array("apple","orange","banana");
console.log(fruits);

// using array literal
let fruit=["apple","orange","banana"];
console.log(fruit)

// Accessing Elements :
//? Accessing Elements:Array elements are accessing using zero-based indices.
let fruit1=["apple","orange","banana","toy"];
console.log(fruit1[0]);
//Modifying Elements:
//? Modifying Elements : you can modify array elements by assigning new values to specific indices.
let fruits2=["apple","orange","banana"];
fruits2[2]="mango";
console.log(fruits2)
// Array Traversal /Iterating over Arrays
//?1:for of loop ,also known as iterable
//* for of loop : the for ... of loop is used to iterate over the values of an iterable object ,such as arrays,strings ,or other iterable objects.
let  name=["apple","banana","orange","mango","grapes"];
// for(let item of name){
//     console.log(item);
// }

for(let item=0; item<name.length; item++){
    console.log(name[item]);
}

//?for in loop
//* for ... in loop:the for ... in loop is used to iterate over the properties (including indices) of an object.
let name1=["abc","bbb","ccc","ddd","eee"];
for(let item in name1){
    console.log(item);
}
 
// //syntax-forEach
// Array.forEach (function callback(currentValue,index,array){
//     //your logic here 
// },thisValue)

// array:the array on which the foreach method is called .
// callback:A function that will be called once for each element in the array.
// currentValue:the current element being processed in the array.index(optional):the index of the current element being processed.
// array(optional):the array foreach was called  upon thisValue(optional):A value to use as this when executing the callback function. 

// Array.forEach((currentValue,index,array)=>{
//     //Your logic here
// },thisValue)

// Syntax-Map()
// array.map(function callback(currentValue,index,array){
//     //your logic here
// },thisValue);

//?forEach Method
//*the arr.forEach()method callls the provide function once for each element of the array .the provide function may perform any kind of operation on the elements of the given array.
  let myName=["banana","apple","oraange","tomato"]

  myName.forEach((curElem, index,arr)=>{
    console.log(`${curElem} ${index}`)

  });



  //?4: map function
  //* map() creates a new array from calling a function for every array element.map() does not change the original array.
  
  let myName1=["aaa","bbbb","ccc","ddd","eee"]
  const myMapArr=myName1.map((curElem,index,arr)=>{
    return `${curElem} ${index}`;
  });
  console.log(myMapArr);
  //todo practice Time
  //!write a program to multiply each element with 2
  const number=[1,2,3,4,5];
  //forEach -performs an action on each element 
  //map-creates a new array with transformed element
  number.forEach((curElem)=>{
    console.log(curElem*2);
  })
  
    const double=number.map((curElem)=>{
    return curElem *2;
  });
  console.log(double);

  //*Key Differenc 
  //!Return value:
  //?forEach: it doesn,t return a value. the forEach method is used for iterting over the element of an array and performing a side effect ,such as modifying the array  or performing a task for each element.

  //? map:it returns a new array containing the results of applying a function to each element in the original array.the original array remains unchanged 
//* use case:
//? forEach:used when you want to iterate over the array elements and perform an action on each element ,but you don,t need a new array.
//?map:used when you want to create a new array based on the transformation of each element in the original array.

//*How to insert ,Add,Replace and delete Elements in Array(CRUD)-p1
//HOW to insert ,Add , Replace and delete Element in Arraay(CRUD)
//?1:push():mehtod that adds one or more elements to the end of an arraay.
//?2:pop():Method that removes the last element from an array.
//?3:unshift():Method that adds one or more elements to the beginning of an array.
//?4:shift():method that removes the first element from an array.


//*what if we want to add or remove anywhere in element-p2
//? the splice() method of Array instances changes the content of an array by removing or replacing existing element and /or adding new elements in place

//*syntax
//?splice(start,deleteCount,item1,item2,/* ..., */ itemN)
let fruit4=["apple","orange","banana","mango"];

//!what if you want  to add the element at the end
fruit4.splice(1,1,"grapes");
console.log(fruit4);

//Searching and filter in an array 
//?for search we hava -indexOf,lastIndex And includes   
const numbers=[1,2,3,4,5,6,7,8,9];
//?:indexOf MEthod:the indexOf method returns the first index at which is given element can be fiund in the array ,or -1 if it is not present.
//?includes():the includes method check wheather an array includes a certain element ,returining true or false.
// syntax:Includes(searchElement,fromIndex)

console.log(number.indexOf(4));
console.log(number.includes(5));

const months=["jan","march","april","june","july"];
months.splice(months.length,0,"dec");
console.log(months);
//?what is the return value of splice method?
//?update march to March (update)?
const indexToUpdate=months.indexOf("march");
months.splice(indexToUpdate,1,"March")
console.log(indexToUpdate);
console.log(months)

//? Delete june from an array?
const indexToDelete=months.indexOf("june");
months.splice(indexToDelete,1);
console.log(months);

//*filter in an array
//?Search +filter
const numbers1=[1,2,3,4,5,4,6,7,8,9];
const results=numbers1.map((curElem)=> curElem*5)
//?find method: the find method is used to find the first element in an array that statisfies a provided testing function.It returns the first matching element or undefined if no element is found.
const results1=results.find((curElem)=>{
  return curElem>10;
})
console.log(results);

//?findIndex  Method: the findIndex() method of typedArray instances returns index of the first element in a type array that satisfies the provided testing function.if no elements satisfy the testing function ,-1 is returned.
const num3=[1,2,3,4,5,6,7,8,9];
const resu=num3.filter((curElem)=>{
  return curElem >6;

})
console.log(resu);
//usecase:In E-commerce website when we want to remove or delete any product  from addToCart page.

//! Ex.let say user wants to delete value 6;
let value =6;
const num1=[1,2,3,4,5,6,7,8,9];

let upd=num1.filter((curElem)=>{
  return curElem  !==value;
})
console.log(upd);


//Ques:Given an array of product where each product has a nama and a price, write a function that uses the filter method to return an array containing only the products  with a price less than or equal to 500.
const product =[
  {name:"laptop",price:200},
  {name:"phone",price:800},
  {name:"tablet",price:300},
  {name:"smartwatch",price:150}
];

const filterProducts=product.filter((curElem)=>{
  return curElem.price<=500;
})
console.log(filterProducts);

//filter  unique values
const numeric=[1,2,3,4,5,6,7,8,6,9];
let uniqueValues=numeric.filter((curElem,index,arr)=>{
  console.log(index);
  console.log(arr.indexOf(curElem));
  return arr.indexOf(curElem)===index;

});
console.log(uniqueValues);

//How to sort and compare an Array
//?how to sort and compare an arry
//? Sorting an array:the sort method sorts the element of an array in place and returns the sorted array.by default,it sorts element as strings.
const fruits4=["banana","apple,","orang","Mango"];
fruit4.sort();
console.log(fruit4);

const nms=[9,8,7,6,4,3,2,1];
nms.sort();
console.log(nms);

nms.sort((a,b)=>{
  if(a>b) return -1;
  if(b>a) return 1;
})
console.log(nms);

//?
// using map to square each number and create a new Array
const nms2=[1,2,3,4,5];
let result =nms2.map((curElem)=> curElem*curElem);
console.log(result)


//!1:using the map method,write a function that takes an array of strings and returns a new array where each string is capitalized.

const words=["apple","banana","cherry","date"];
const result5=words.map((curElem)=>{
  return curElem.toLocaleUpperCase();
})
console.log(result5);

//!2:using the map method,write a function that takes an array of numbers and returns a new arrray where each number is squared ,but only if it,s an even number.
const nms5=[1,2,3,4,5];
const resu1=nms5.map((curElem)=>{
  if(curElem%2==0){
    return curElem*curElem;
  }
}).filter((curElem)=> curElem !==undefined);
console.log(resu1)

//!using  the map method ,write a function that takes an arrray of names and returns a new array where each name is prefixed with "mr";
const names4=["ram","bhart","laxman"];
const prefixed=names4.map((curName)=> `Mr.${curName}`);
console.log(prefixed);


//reduced  method 
// Array.reduce(function callback(accumulator,currentValue,index,array){
//   //your logic here
//   //return the updated accumulator value
// },intialValue)


const  product4=[100,200,300,400,500];
const totalPrice =product4.reduce((accu,curElem)=>{
return accu + curElem
;},0)
console.log(totalPrice);
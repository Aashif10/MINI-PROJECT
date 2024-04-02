// let str="Aashif";
// console.log(str);

// let str=new String("Hello")
// console.log(str[1]);
//  console.log(str.length)

// update sting
// let str='aashif'
// console.log(str)
// // String can not be update , String is immutable
// // ! To iterate over  string character
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }
// let str='Aashif'
// // Here is used = for of Loop
// for (character of str)
// {
//     console.log(character)

// }
/* 
  There are 2 type of string
  1. Single line quote 
  It is created by using single quotes ('') or double quote("")
  2. MultiLine String
  Also called as template string
  It is created by using vackticks(``)
  Line break are allowed 
  we can insert variables, expressions directly inside inside the string by using `${variable expression}

*/

// let a=32;
// let b=22;
// let c=20;
// console.log(`The vlaue of a =${a} the  value of  a ${b}
// the value of c${c}
// the sum of two value ${a+b}`)
// console.log("===========")
// let arr=[false,30,"aashif",40n,0,100]
// console.log("Original Array-")
// console.log(arr);

// let arr1=arr.map(value=>Boolean(value));
// console.log("New Array:")
// console.log(arr1);

let arr=[false,30,"aashif",40n,0,100,"javascript",true,"HTML",false]
let newArray=arr.filter(value=>value===Boolean(value)||value===String(value)||value===Number(value))

console.log(newArray)

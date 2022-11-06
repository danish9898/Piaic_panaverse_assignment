// assignment no # 1
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
let arr1 = [11, 15, 17, 18, 20];
arr1.sort();
let num = arr1.min();
let maxnumber = arr1.max();
let newarray = [];
for (num; num < maxnumber; num++) {
  if (arr1.includes(num) == false) {
    newarray.push(num);
    // console.log("missing number is : " + num+" and index of array is : ");
  } else {
    newarray.push(num);
  }
}
// console.log("missing number is : " + newarray);
newarray.forEach(element => {
  console.log("element : "+element)
  if (arr1.includes(element) == false) {
    console.log("missing number is : " + element+" and index of array is : "+newarray.indexOf(element));
  } 
});
// let array = ["testa", "testb"];
// Array.prototype.upperCase = function () {
//   var i;
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// // Prototype of array function 1
// Array.prototype.lowercase = function () {
//   var i;
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toLowerCase();
//   }
// };

// // assignment no # 2

// // Prototype of array function 2
// array.upperCase();
// array.forEach((element) => {
//   console.log("array index : " + element);
// });
// let array1 = ["Testa", "tEstb"];
// array.lowercase();
// array.forEach((element) => {
//   console.log("array index : " + element);
// });

// // assignment no # 4
// // on browser side assignment_4.html created

// function prompt() {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question("Enter a nmber ", (number) => {
//     console.log(`hello, hi there ${number}`);
//     readline.close();
//   });
// }
// prompt();

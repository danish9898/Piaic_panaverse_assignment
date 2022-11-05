// assignment no # 1
let arr1 = [11, 15, 17, 18, 19];
for (let i = 0; i < arr1.length; i++) {
  console.log("array index : " + i + " and array value is : " + arr1[i]);
}
let array = ["testa", "testb"];
Array.prototype.upperCase = function () {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
// Prototype of array function 1
Array.prototype.lowercase = function () {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toLowerCase();
  }
};

// assignment no # 2

// Prototype of array function 2
array.upperCase();
array.forEach((element) => {
  console.log("array index : " + element);
});
let array1 = ["Testa", "tEstb"];
array.lowercase();
array.forEach((element) => {
  console.log("array index : " + element);
});

// assignment no # 4
// on browser side assignment_4.html created

function prompt() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question("Enter a nmber ", (number) => {
    console.log(`hello, hi there ${number}`);
    readline.close();
  });
}
prompt()


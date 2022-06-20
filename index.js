/*Function
function sentenceBlanks(hardness, wasa, front1, front2, front3) {
  var sentence =
    "On a scale from 1-10, " +
    hardness +
    " " +
    front1 +
    " " +
    wasa +
    " " +
    3 +
    ", " +
    hardness +
    " " +
    front2 +
    " " +
    wasa +
    " " +
    5 +
    ", and " +
    hardness +
    " " +
    front3 +
    " " +
    wasa +
    " " +
    7 +
    ".";
  return sentence;
}
console.log(
  sentenceBlanks("the difficulty of", "was a", "HTML", "CSS", "Javascript")
);
*/

/*Array
var array = ["Moe", 19, "Bachelor of Business"];
array.shift(); //removed "Moe" and made 19 index 0
array.unshift("Moe"); //added "Moe" and made it index 0
array[2] = "Bachelor of Software Engineering"; //replaced the previous array[2] "bachelor of business".
var sentence =
  "My name is " +
  array[0] +
  " and I am " +
  array[1] +
  " years old, doing a " +
  array[2] +
  ".";
array.push("yay"); //added an index 3 to the array as "yay"
array.pop(); // removed index 3 "yay".
console.log(sentence + array[3]);
*/

/*function with no arguments
function myFunction(){
console.log("nice "+2+" see u.");
}
myFunction();
*/

/*Function with arguments
function myFunction(a,b,c){
  console.log(a + b + c);
}
myFunction(1,2,3);
*/

/*Function with return
function plusEight(x){
var result=x+8;
return result;
}
console.log(plusEight(2));
*/

/*Function Next In Line
var queArray = [1, 2, 3, 4, 5, 6];

function array() {
  queArray.push(7);
  queArray.shift();
}
array();

console.log(queArray);
*/

/*Function Next In Line advanced
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Previous: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("Previous: " + JSON.stringify(testArr));
*/

/*If Statement True or False
function theTrueOrFalse(isItFalse) {
  if (isItFalse) {
    return "turns out it is true!";
  }
  return "unfortunately it is indeed false";
}
console.log(theTrueOrFalse(true));
//here, when true is initialised to the function, it will return the first line.
//when false is initialised to the function, it will return the second line,
*/

/*If Statement Equality
function isItEqual(value){
  if(value == 80) {
    return "yay its equal";
  }
  return "nope, try again";
}
console.log(isItEqual(80));
*/

/*If Statement Greater/Less than
function isItGreaterThan(value){
  if(value >= 55){
    return "that is greater than or equal to 55"
  }
    return "that is less than 55"
  }
  function isItLessThan(value){
    if(value <= 3 ){
      return "that is less than or equal to 3"
    }
    return "that is greater than 3"
  }
  console.log(isItGreaterThan(55))
  console.log(isItLessThan(2))
  */
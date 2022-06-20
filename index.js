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

/*if, else if, else statements
  function size(num){
    if(num<5){
      return "Tiny";
    }
    else if (num<10){
      return "Small";
    }
    else if (num<15){
      return "Medium";
    }
    else if (num<20){
      return "Large";
    }
    else{
      return "Huge";
    }
  }
  console.log(size(20));
  */

/*Functions, Arrays and If Statement practice
var golfNameArray = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return golfNameArray[0];
  } else if (strokes <= par - 2) {
    return golfNameArray[1];
  } else if (strokes == par - 1) {
    return golfNameArray[2];
  } else if (strokes == par) {
    return golfNameArray[3];
  } else if (strokes == par + 1) {
    return golfNameArray[4];
  } else if (strokes == par + 2) {
    return golfNameArray[5];
  } else {
    return golfNameArray[6];
  }
}
console.log(golfScore(5, 8));
*/

/*Switch Statement
var answer;
function switchFirstAttempt(value) {
  switch (value) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
      default:
        answer = "not labelled"
  }
  return answer;
}
console.log(switchFirstAttempt(5))
*/

/* Switch Statement Practice
function switchPractice(value) {
  switch (value) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
      break;
  }
  return answer;
}
console.log(switchPractice("bob"));
*/

/*Switch and If challenge

//when theres a low card, the count goes up, vice versa. middle value stays the same.
//if final count is positive, then the player should bet high
//if final count is 0 or negative, then the player should bet low

var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count <= 0) {
    holdbet = "bet low";
  } else {
    holdbet = "bet high";
  }
  return count + " " + holdbet;
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc(4));
*/

/*Objects basics
//creating the object
var myCat = {
  name: "Coco",
  legs: 4,
  age: 3,
  friends: [],
  "its gender": "Male",
};
//change name property
myCat.name = "Coco Chanel";
//add meow property
myCat.meow = '"Maw Maw"';
//delete friends cause he has none
delete myCat.friends;
//accessing the object
var myCatsNameAndGender = myCat.name + ", " + myCat["its gender"]; //one word property uses not, but two + word property uses brackets
console.log(myCatsNameAndGender + " " + myCat.meow);
*/

/*Functions and Objects practice
function nameLookup(value){
var lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
};
return lookup[value];
} 
console.log(nameLookup("bravo"));
*/

/*Objects: hasOwnProperty method
var myObj = {
  phone: "apple",
  watch: "gucci",
  water: "Mount Franklin",
};
function checkProperty(value){
 if (myObj.hasOwnProperty(value)){
  return myObj[value];
 }
 else{
  return "Not Found";
 }
}
console.log(checkProperty("phone"));
*/

/*Nested Objects
var myCar = {
  car: {
    interior: {
      pedals: "brakes",
      "passenger seat": "crumbs",
    },
    exterior: {
      scratches: 4,
    },
  },
};
console.log(myCar.car.interior["passenger seat"]);
*/
//console.log("Hello from JavaScript");


/* multiline comment
 
Data types:
undifined, null, boolean, string, symbol, number, and object 
 



//in-line comment

var myName = "Saul"

myName = 8

console.log(myName);

let ourName = "USP"

const pi = 3.14

var a = 7;
var b =  2;

a = 7;

b = a;

console.log(b)
*/

// var c = "I'm a";
// var type = c + " string!";
// console.log(type);

// REMAINDER
// var remainder;
// remainder = 11 % 2;

// console.log(remainder);


// var a = 3;
// a += 1;
// console.log(a);

// var firstName = 'Saul';
// var lastName = 'Paiva';
// var myStr = " I am a \"double quoted\" string inside foible quotes ";
// var otherStr = ' other way \\  other string  \n new line \t tab ';

// Find length  of string
//  var bigWord = "paralelepípedo";
// // var wordLength;
// // wordLength = bigWord.length;
// // console.log(wordLength);

// var firstLetter;
// firstLetter = bigWord[0];
// console.log(firstLetter);

// function wordBlanks(noum,adj,verb,adverb, thing) {
//     var result = "";
//     result += "The " + adj + " " + noum + " " + verb + " to the " + thing + " " + adverb;
//     return result;
// }

// console.log(wordBlanks("dog", "hungry", "run" ,"quikly","store"));
// console.log(wordBlanks("Girl", "pretty", "smile" , "shy", "boy"));

// var myArray = [["Saul", 21],["University", 125]];

// myArray.push(["João", 10]);
// console.log(myArray);


//var myArray = [1,2,3,4,5];

// var removedArray = myArray.push(6);
// console.log(myArray);
// console.log("Added array: " + removedArray);

// var removedArray = myArray.pop();
// console.log(myArray);
// console.log("Removed array: " + removedArray);

// var removedArray = myArray.shift();
// console.log(myArray);
// console.log("Removed array: " + removedArray);

// myArray.unshift(-5);
// var addedArray = myArray[0];
// console.log(myArray);
// console.log("Added array: " + addedArray);

// FUNCTIONS

// function intro() {
//     console.log("Hey world");
// }
// intro();
// intro();
// intro();

// function sum(a,b) {
//     console.log(a + b);
// }
// sum(12,7);

//local and global scope

// var outerWear = "T-shirt";

// function myOutfit()  {
//     var outerWear = "Sweater";
//     return outerWear;
// }
// console.log(outerWear);
// console.log(myOutfit());

// function minusSeven(num) {
//     return num -7;
// }
// console.log(minusSeven(5));

// var array = [1,2,3,4,5];

// console.log(JSON.stringify(array));
// console.log(array);

// BOOLEANS
//
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "yes, it's true";
//     }
//     return "No, it's false";
// }
// console.log(ourTrueOrFalse(false));
//
// and -> &&
// or -> ||

//SWITCH STATEMENT

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }  
//     return answer;
// }
// console.log(caseInSwitch(3));

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case "a":
//             answer = "alpha";
//             break;
//         case "b":
//             answer = "beta";
//             break;
//         case "c":
//             answer = "gamma";
//             break;
//         case "d":
//             answer = "delta";
//             break;
//         default:
//         answer = "stuff";
//     }  
//     return answer;
// }
// console.log(caseInSwitch(100));

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "high";
//             break;
//         default:
//             answer = "none";
//     }  
//     return answer;
// }
// console.log(caseInSwitch(5));

//COUNTING CARDS

// var count = 0;

// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//            break;
//     }
    
//     var holdbet = 'Hold';
//     if (count > 0) {
//         holdbet = 'Bet';
//     }
    
//     return count + " " + holdbet;
// }

// console.log(cc(4));

//OBJECTS
//
//
// var ourDog = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats",
// };

// var hatValue = ourDog.hat;
// var shirtValue = ourDog["shoes"];

// console.log(hatValue);
// console.log(shirtValue);

//LOOPS
//
// var myArray = [];

// var i = 0;
// while(i<5) {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray);

// var ourArray = [];

// for (var i = 0; i < 5; i++) {
//     ourArray.push(i);
// }
//
// var myArray = [];
//
// for (var i = 1; i < 6; i += 1) {
//     myArray.push(i);
// }
//
// console.log(ourArray);
// console.log(myArray);
//
// var myArray = [0,1,2,3,4,5,6,7,8,9,10];
// var total = 0;
//
// for (var i = 0; i < myArray.length; i++) {
//     total += myArray[i];
// }
// console.log(total);
//
// function multiplyAll(arr) {
//     var product = 1;
    
//     for (var i=0; i < arr.length; i++) {
//         for (var j=0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;
// }

// var prod = multiplyAll([[1,2],[3,4],[5,6,7]]);

// console.log(prod);

// function multiplyArr(arr) {
//     var product = 1;
    
//     for (var i=0; i < arr.length; i++) {
//         for (var j=0;  j < arr[i].length; j++) {
//         product *= arr[i][j]; 
//         }
//     }
// return product;
// }

// var prod = multiplyArr([[1,2],[3,4],[5,6,7]]);
// console.log(prod);
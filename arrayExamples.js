
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = 
[captain,
second,
pilot,
companion,
mercenary,
mechanic];


console.log(crew);

//output
//[ 'Mal', 'Zoe', 'Wash', 'Inara', 'Jayne', 'Kaylee' ]


/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2,1,"Yellow", "Green");
rainbow.splice(5,0,"Purple");
console.log(rainbow);

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */
 
// your code goes here
const hasEnoughPlayers = function(array){
  if(array.length >=7)
      return true;
  else 
      return false;

};

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

console.log(hasEnoughPlayers(team));

//Udacity solution - one of possible solutions
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(arrayInstance) {
    if (arrayInstance.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else 
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));

/**/
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor, sister, shepherd);
console.log(crew);

/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

let numOfHa = '';
var laugh = function(num){
    for(let i = 1; i <= num; i++){
        numOfHa = numOfHa + 'ha';
    }
    numOfHa = numOfHa + '!';
    return numOfHa;
};

console.log(laugh(10));

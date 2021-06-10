function isPrime(integer){
  for(a = 2; a < integer; a++){
    if(integer % a === 0){
      console.log(integer + ' is divisible by ' + a);
      return false;
    }
  }
  return true;
}

isPrime(11);

//This code doesn't take care of 0, 1, and negative numbers..
//And it doesn't loop through when there are multiple divisors..

function sayGreeting() {
  var greeting = "hello";
  return greeting;
  console.log(greeting);
  
}

sayGreeting();


function findAverage(x,y){
  var answer = (x*y)/2;
  return answer;
}
findAverage(2,3);

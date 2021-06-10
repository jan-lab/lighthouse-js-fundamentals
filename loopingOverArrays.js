//traditional method

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let i = 0; i < amounts.length; i++){
  total += amounts[i];
}
console.log('Order total is: ', total);


//for..of loops
/*
The for..of loop is only really useful for going through an entire array from beginning to end. If instead we need to loop through an array in a different order (e.g. backwards, or skipping every other element), then we'll need to use a traditional for loop instead.
*/

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


let data = [1,2,3,4];
for (let item of data) {
  console.log(item);
}


let name = 'pedro';
for (let character of name) {
  console.log(character);
}
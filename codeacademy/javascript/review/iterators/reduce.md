The .reduce() Method
Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17
Here are the values of accumulator and currentValue as we iterate through the numbers array:

Iteration	accumulator	currentValue	return value
First	1	2	3
Second	3	4	7
Third	7	10	17

Now let’s go over the use of .reduce() from the example above:

numbers is an array that contains numbers.
summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.
The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
Here’s an updated chart that accounts for the second argument of 100:

Iteration #	accumulator	currentValue	return value
First	100	1	101
Second	101	2	103
Third	103	4	107
Fourth	107	10	117

Instructions
1.
Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

In main.js, there is an array of numbers, newNumbers.

To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.

You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!

Checkpoint 2 Passed

Stuck? Get a hint
2.
Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

Checkpoint 3 Passed

Stuck? Get a hint
3.
To check the value being used as we iterate through the array, add three statements to the function body of the callback:

console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
a return statement that adds accumulator to currentValue.
Checkpoint 4 Passed

Hint
Your code should looks similar to:

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})
Or

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})
4.
Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

Checkpoint 5 Passed
5.
While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

Add a second argument of 10 to .reduce().

Checkpoint 6 Passed

Hint
Make sure you’re adding a second argument to .reduce() and not another argument to the callback function.

Your code should look like:

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  // Existing code...
}, 10)
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // Existing code...
}, 10)


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

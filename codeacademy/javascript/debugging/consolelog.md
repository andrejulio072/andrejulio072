Locating Silent Bugs
Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: console.log()!

By adding print statements to our code, we can identify where things have gone wrong.

Let’s try using console.log() to do some debugging.

Instructions
1.
In the code editor, we’ve given you a function that is supposed to take a string containing a single word as an argument and return the capitalized version of that word. If the string contains multiple words (contains a space character, ' '), it should return null.

Currently, this code is not working as expected. Take a look at our tests on lines 16-19. We expect the first function call to return 'Hey' and the second function call to return null. Run the code to see that it is not working as expected but also not throwing any errors.

Checkpoint 2 Passed
2.
Let’s use console.log() to debug this code! Start by adding a console.log() statement to line 2 and printing out the word being passed into the function. This will help us ensure our function is being called properly and the word variable is set as we expect at the start of the function.

Checkpoint 3 Passed
3.
Looking at the console output, both 'hey' and 'hey ho' are being printed as we expected. No bugs yet.

Comment out the console.log() statement from the beginning of the function. Then add the following console.log() statement inside the if statement to see if it is working properly:

console.log('Word value inside of if statement: ' + word);
The behavior we want is for 'hey ho' to enter the if block and return null and for 'hey' to skip the if block and get capitalized.

Checkpoint 4 Passed
4.
Look at the console output. 'hey' is being printed from inside the if statement block and 'hey ho' is not. This is the opposite behavior we expected. We found a bug!

Looking at our if statement, we accidentally included a ! that is negating our condition. It is saying that if a word does not have multiple words, go into the if block, and if it does, move past it.

Delete the ! character from the beginning of the if statement condition to fix the bug, then re-run our code.

Our function now appears to be working as expected, so there is no need to continue stepping through the rest of the function.

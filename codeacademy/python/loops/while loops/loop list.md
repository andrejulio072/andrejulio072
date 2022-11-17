While Loops: Lists
A while loop isn’t only good for counting! Similar to how we saw for loops working with lists, we can use while loops to iterate through a list as well.

Let’s return to our ingredient list:

ingredients = ["milk", "sugar", "vanilla extract", "dough", "chocolate"]
We know that while loops require some form of a variable to track the condition of the loop to start and stop.

Take some time to think about what we would use to track whether we need to start/stop the loop if we want to iterate through ingredients and print every element.

Click here to find out!

We know that a list has a predetermined length. If we use the length of the list as the basis for how long our while loop needs to run, we can iterate the exact length of the list.

We can use the built-in Python len() function to accomplish this:

# Length would be equal to 5
length = len(ingredients)

We can then use this length in addition to another variable to construct the while loop:

length = len(ingredients)
index = 0

while index < length:
  print(ingredients[index])
  index += 1
Let’s break this down:

# Length will be 5 in this case
length = len(ingredients)
Explanation

# Index starts at zero
index = 0
Explanation

while index < length:
Explanation

# The first iteration will print ingredients[0]
print(ingredients[index])
Explanation

# Increment index to access the next element in ingredients
# Each iteration gets closer to making the conditional no longer true
index += 1
Explanation

Our final output would be:

milk
sugar
vanilla extract
dough
chocolate
Let’s use a while loop to iterate through some lists!

Instructions
1.
We are going to write a while loop to iterate over the provided list python_topics.

First, we will need a variable to represent the length of the list. This will help us know how many times our while loop needs to iterate.

Create a variable length and set its value to be the length of the list of python_topics.


Stuck? Get a hint
2.
Next, we will require a variable to compare to our length variable to make sure we are able to implement a condition that eventually allows the loop to stop.

Create a variable called index and initialize the value to be 0.

3.
Let’s now build our loop. We want our loop to iterate over the list of python_topics and on each iteration print "I am learning about <element from python_topics>". For this loop we will need the following components:

A condition for our while loop
A statement in the loop body to print from our condition
A statement in the loop body to increment our index forward.
The end result should output:

I am learning about variables
I am learning about control flow
I am learning about loops
I am learning about modules
I am learning about classes
If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop.

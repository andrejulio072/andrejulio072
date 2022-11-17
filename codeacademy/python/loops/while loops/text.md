While Loops: Introduction
In Python, for loops are not the only type of loops we can use. Another type of loop is called a while loop and is a form of indefinite iteration.

A while loop performs a set of instructions as long as a given condition is true.

The structure follows this pattern:

while <conditional statement>:
  <action>
Let’s examine this example, where we print the integers 0 through 3:

count = 0
while count <= 3:
  # Loop Body
  print(count)
  count += 1
Let’s break the loop down:

count is initially defined with the value of 0. The conditional statement in the while loop is count <= 3, which is true at the initial iteration of the loop, so the loop body executes.

Inside the loop body, count is printed and then incremented by 1.

When the first iteration of the loop has finished, Python returns to the top of the loop and checks the conditional again. After the first iteration, count would be equal to 1 so the conditional still evaluates to True and so the loop continues.

This continues until the count variable becomes 4. At that point, when the conditional is tested it will no longer be True and the loop will stop.

The output would be:

0
1
2
3
Note the following about while loops before we write our own:

Indentation:

Notice that in our example the code under the loop declaration is indented. Similar to a for loop, everything at the same level of indentation after the while loop declaration is run on every iteration of the loop while the condition is true.

while count <= 3:
  # Loop Body
  print(count)
  count += 1
  # Any other code at this level of indentation will
  # run on each iteration
If we ever forget to indent, we’ll get an IndentationError or unexpected behavior.

Elegant loops:

Similar to for loops, Python allows us to write elegant one-line while loops. Here is our previous example in a single line:

count = 0
while count <= 3: print(count); count += 1
Note: Here we separate each statement with a ; to denote a separate line of code.

Let’s practice writing a while loop!

Instructions

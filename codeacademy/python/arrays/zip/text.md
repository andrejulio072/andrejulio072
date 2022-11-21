Accessing 2D Lists
Let’s return to our classroom heights example:

heights = [["Noelle", 61], ["Ali", 70], ["Sam", 67]]
Two-dimensional lists can be accessed similar to their one-dimensional counterpart. Instead of providing a single pair of brackets [ ] we will use an additional set for each dimension past the first.

If we wanted to access "Noelle"‘s height:

#Access the sublist at index 0, and then access the 1st index of that sublist.
noelles_height = heights[0][1]
print(noelles_height)
Would output:

61
Here are the index numbers to access data for the list heights:

Element	Index
"Noelle"	heights[0][0]
61	heights[0][1]
"Ali"	heights[1][0]
70	heights[1][1]
"Sam"	heights[2][0]
67	heights[2][1]

Let’s practice accessing data in a two-dimensional list.

Cut Me a Slice of String
Not only can we select a single character from a string, but we can also select entire chunks of characters from a string. We can do this with the following syntax:

string[first_index:last_index]
This is called slicing a string. When we slice a string we are creating a brand new string that starts at (and includes) the first_index and ends at (but excludes) the last_index.

Let’s look at some examples of this. Recall our favorite fruit:

favorite_fruit = "blueberry"
The indices of this string are shown in the diagram below.

Blueberry String

Let’s say we wanted a new string that contains the letters be. We could slice favorite_fruit as follows:

print(favorite_fruit[4:6])
# Output: be
Notice how the character at the first index, b, is included, but the character at the last index, r, is excluded. If you look for the indices 4 and 6 in the diagram, you can see how the r is outside that range.

We can also have open-ended selections. If we remove the first index, the slice starts at the beginning of the string and if we remove the second index the slice continues to the end of the string.

print(favorite_fruit[:4])
# Output: blue

print (favorite_fruit[4:])
# Output: berry
Again, notice how the b from berry is excluded from the first example and included in the second example.

Instructions
1.
You’re a programmer working for Copeland’s Corporate Company. At this company, each employee’s user name is generated by taking the first five letters of their last name.

A new employee, Rodrigo Villanueva, is starting today and you need to create his account. His first_name and last_name are stored as strings in script.py.

Create a variable new_account by slicing the first five letters of his last_name.


Stuck? Get a hint
2.
Temporary passwords for new employees are also generated from their last names.

Create a variable called temp_password by creating a slice out of the third through sixth letters of last_name. Your string should have a total of 4 characters.
Sorting Lists I
Often, we will want to sort a list in either numerical (1, 2, 3, …) or alphabetical (a, b, c, …) order.

We can sort a list using the method .sort().

Suppose that we have a list of names:

names = ["Xander", "Buffy", "Angel", "Willow", "Giles"]
Let’s see what happens when we apply .sort():

names.sort()
print(names)
Would output:

['Angel', 'Buffy', 'Giles', 'Willow', 'Xander']
As we can see, the .sort() method sorted our list of names in alphabetical order.

.sort() also provides us the option to go in reverse. Instead of sorting in ascending order like we just saw, we can do so in descending order.

names.sort(reverse=True)
print(names)
Would output:

['Xander', 'Willow', 'Giles', 'Buffy', 'Angel']
Note: The .sort() method does not return any value and thus does not need to be assigned to a variable since it modifies the list directly. If we do assign the result of the method, it would assign the value of None to the variable.

Let’s experiment sorting various lists!

Instructions
1.
Use .sort() to sort addresses.


Stuck? Get a hint
2.
Use print() to see how addresses changed.

3.
Remove the # and whitespace in front of the line sort(names). Edit this line so that it runs without producing a NameError.


Stuck? Get a hint
4.
Use print to examine sorted_cities. Why is it not the sorted version of cities?


Stuck? Get a hint
5.
Edit the .sort() call on cities such that it sorts the cities in reverse order (descending).

Print cities to see the result.

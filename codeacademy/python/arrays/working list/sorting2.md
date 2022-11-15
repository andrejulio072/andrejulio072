Sorting Lists II
A second way of sorting a list in Python is to use the built-in function sorted().

The sorted() function is different from the .sort() method in two ways:

It comes before a list, instead of after as all built-in functions do.
It generates a new list rather than modifying the one that already exists.
Let’s return to our list of names:

names = ["Xander", "Buffy", "Angel", "Willow", "Giles"]
Using sorted(), we can create a new list, called sorted_names:

sorted_names = sorted(names)
print(sorted_names)
This yields the list sorted alphabetically:

['Angel', 'Buffy', 'Giles', 'Willow', 'Xander']
Note that using sorted did not change names:

print(names)
Would output:

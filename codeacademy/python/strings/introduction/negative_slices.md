Negative Indices
In the previous exercise, we used len() to get a slice of characters at the end of a string.

There’s a much easier way to do this — we can use negative indices! Negative indices count backward from the end of the string, so string_name[-1] is the last character of the string, string_name[-2] is the second last character of the string, etc.

Here are some examples:

favorite_fruit = 'blueberry'
print(favorite_fruit[-1])
# => 'y'

print(favorite_fruit[-2])
# => 'r'

print(favorite_fruit[-3:])
# => 'rry'
Notice that we are able to slice the last three characters of ‘blueberry’ by having a starting index of -3 and omitting a final index.

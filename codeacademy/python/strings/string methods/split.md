Splitting Strings II
If we provide an argument for .split() we can dictate the character we want our string to be split on. This argument should be provided as a string itself.

Consider the following example:

greatest_guitarist = "santana"
print(greatest_guitarist.split('n'))
# => ['sa', 'ta', 'a']
We provided 'n' as the argument for .split() so our string “santana” got split at each 'n' character into a list of three strings.

What do you think happens if we split the same string at 'a'?

print(greatest_guitarist.split('a'))
# => ['s', 'nt', 'n', '']
Notice that there is an unexpected extra '' string in this list. When you split a string on a character that it also ends with, you’ll end up with an empty string at the end of the list.

You can use any string as the argument for .split(), making it a versatile and powerful tool.

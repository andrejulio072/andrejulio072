Replace
The next string method we will cover is .replace(). Replace takes two arguments and replaces all instances of the first argument in a string with the second argument. The syntax is as follows

string_name.replace(substring_being_replaced, new_substring)
Great! Let’s put it in context and look at an example.

with_spaces = "You got the kind of loving that can be so smooth"
with_underscores = with_spaces.replace(' ', '_')
print(with_underscores)
# 'You_got_the_kind_of_loving_that_can_be_so_smooth'
Here we used .replace() to change every instance of a space in the string above to be an underscore instead.

Note that in this example, we used a single character, but these substrings can be multiple characters long!

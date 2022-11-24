Strings and Conditionals (Part Two)
There’s an even easier way than iterating through the entire string to determine if a character is in a string. We can do this type of check more efficiently using in. in checks if one string is part of another string.

Here is what the syntax of in looks like:

letter in word
Here, letter in word is a boolean expression that is True if the string letter is in the string word. Here are some examples:

print("e" in "blueberry")
# => True
print("a" in "blueberry")
# => False
In fact, this method is more powerful than the function you wrote in the last exercise because it not only works with letters, but with entire strings as well.

print("blue" in "blueberry")
# => True
print("blue" in "strawberry")
# => False
Instructions
1.
Write a function called contains that takes two arguments, big_string and little_string and returns True if big_string contains little_string.

For example contains("watermelon", "melon") should return True and contains("watermelon", "berry") should return False.

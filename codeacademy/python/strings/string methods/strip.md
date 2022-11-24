.strip()
When working with strings that come from real data, you will often find that the strings aren’t super clean. You’ll find lots of extra whitespace, unnecessary linebreaks, and rogue tabs.

Python provides a great method for cleaning strings: .strip(). Stripping a string removes all whitespace characters from the beginning and end. Consider the following example:

featuring = "           rob thomas                 "
print(featuring.strip())
# => 'rob thomas'
All the whitespace on either side of the string has been stripped, but the whitespace in the middle has been preserved.

You can also use .strip() with a character argument, which will strip that character from either end of the string.

featuring = "!!!rob thomas       !!!!!"
print(featuring.strip('!'))
# => 'rob thomas       '
By including the argument '!' we are able to strip all of the ! characters from either side of the string. Notice that now that we’ve included an argument we are no longer stripping whitespace, we are ONLY stripping the argument.

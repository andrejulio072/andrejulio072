Concatenating Strings
We can also concatenate, or combine, two existing strings together into a new string. Consider the following two strings:

fruit_prefix = "blue"
fruit_suffix = "berries"
We can create a new string by concatenating them together as follows:

favorite_fruit = fruit_prefix + fruit_suffix

print(favorite_fruit)
# Output: blueberries
Notice that there are no spaces added here. We have to manually add in the spaces when concatenating strings if we want to include them.

fruit_sentence = "My favorite fruit is" + favorite_fruit

print(fruit_sentence)
# Output: My favorite fruit isblueberries

fruit_sentence = "My favorite fruit is " + favorite_fruit

print(fruit_sentence)
# Output: My favorite fruit is blueberries
It’s subtle, but notice that in the first example, there is no space between “is” and “blueberries”.

Instructions
1.
Copeland’s Corporate Company has realized that their policy of using the first five letters of an employee’s last name as a user name isn’t ideal when they have multiple employees with the same last name.

Write a function called account_generator() that takes two inputs, first_name and last_name and concatenates the first three letters of each and then returns the new account name.


Stuck? Get a hint
2.
Test your function on the first_name and last_name provided in script.py and save it to the variable new_account.

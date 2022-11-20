List Comprehensions: Conditionals
List Comprehensions are very flexible. We even can expand our examples to incorporate conditional logic.

Suppose we wanted to double only our negative numbers from our previous numbers list.

We will start by using a for loop and a list only_negative_doubled:

numbers = [2, -1, 79, 33, -45]
only_negative_doubled = []

for num in numbers:
  if num < 0:
    only_negative_doubled.append(num * 2)

print(only_negative_doubled)
Would output:

[-2, -90]
Now, here is what our code would look like using a list comprehension:

numbers = [2, -1, 79, 33, -45]
negative_doubled = [num * 2 for num in numbers if num < 0]
print(negative_doubled)
Would output the same result:

[-2, -90]
In our negative_doubled example, our list comprehension:

Takes an element in the list numbers.
Assigns that element to a variable called num.
Checks if the condition num < 0 is met by the element stored in num. If so, it goes to step 4, otherwise it skips it and goes to the next element in the list.
Applies the expression num * 2 on the element stored in num and adds the result to a new list called negative_doubled
Repeats steps 1-3 (and sometimes 4) for each remaining element in the numbers list.
We can also use If-Else conditions directly in our comprehensions. For example, let’s say we wanted to double every negative number but triple all positive numbers. Here is what our code might look like:

numbers = [2, -1, 79, 33, -45]
doubled = [num * 2 if num < 0 else num * 3 for num in numbers ]
print(doubled)
Would output:

[6, -2, 237, 99, -90]
This is a bit different than our previous comprehension since the conditional if num < 0 else num * 3 comes after the expression num * 2 but before our for keyword.

Let’s write our own list comprehensions with conditionals!

Instructions
1.
We have defined a list heights of visitors to a theme park. In order to ride the Topsy Turvy Tumbletron roller coaster, you need to be above 161 centimeters.

Using a list comprehension, create a new list called can_ride_coaster that has every element from heights that is greater than 161.

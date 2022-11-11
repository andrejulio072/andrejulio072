Removing by Index: Pop
Just as we learned to insert elements at specific indices, Python gives us a method to remove elements at a specific index using a method called .pop().

The .pop() method takes an optional single input:

The index for the element you want to remove.
To see it in action, let’s consider a list called cs_topics that stores a collection of topics one might study in a computer science program.

cs_topics = ["Python", "Data Structures", "Balloon Making", "Algorithms", "Clowns 101"]
Two of these topics don’t look like they belong, let’s see how we remove them using .pop().

First let’s remove "Clowns 101":

removed_element = cs_topics.pop()
print(cs_topics)
print(removed_element)
Would output:

['Python', 'Data Structures', 'Balloon Making', 'Algorithms']
'Clowns 101'
Notice two things about this example:

The method can be called without a specific index. Using .pop() without an index will remove whatever the last element of the list is. In our case "Clowns 101" gets removed.

.pop() is unique in that it will return the value that was removed. If we wanted to know what element was deleted, simply assign a variable to the call of the .pop() method. In this case, we assigned it to removed_element.

Lastly let’s remove "Balloon Making":

cs_topics.pop(2)
print(cs_topics)
Would output:

['Python', 'Data Structures', 'Algorithms']
Notice two things about this example:

The method can be called with an optional specific index to remove. In our case, the index 2 removes the value of "Balloon Making".
We don’t have to save the removed value to any variable if we don’t care to use it later.
Note: Passing in an index that does not exist or calling .pop() on an empty list will both result in an IndexError.

Let’s apply what we learned about the .pop() method.

Instructions
1.
We have decided to pursue the study of data science in addition to our computer science coursework. We signed up for an online school that would help us become proficient.

Check out the current list of topics we will be studying in our code editor.

Click Run to print out the list.

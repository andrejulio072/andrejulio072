Whitespace & Execution Flow
Consider our welcome function for our trip planning application:

def trip_welcome():
  print("Welcome to Tripcademy!")
  print("Let's get you to your destination.")
The print statements all run together when trip_welcome() is called. This is because they have the same base level of indentation (2 spaces).

In Python, the amount of whitespace tells the computer what is part of a function and what is not part of that function.

If we wanted to write another statement outside of trip_welcome(), we would have to unindent the new line:

def trip_welcome():
  # Indented code is part of the function body
  print("Welcome to Tripcademy!")
  print("Let's get you to your destination.")

# Unindented code below is not part of the function body
print("Woah, look at the weather outside! Don't walk, take the train!")

trip_welcome()
Our trip_welcome() function steps will not print Woah, look at the weather outside! Don't walk, take the train! on our function call. The print() statement was unindented to show it was not a part of the function body but rather a separate statement.

We would see the following output from this program:

Woah, look at the weather outside! Don't walk, take the train!
Welcome to Tripcademy!
Let's get you to your destination.
Lastly, note that the execution of a program always begins on the first line. The code is then executed one line at a time from top to bottom. This is known as execution flow and is the order a program in python executes code.

Woah, look at the weather outside! Don't walk, take the train! was printed before the print() statements from the function trip_welcome().

Even though our function was defined before our lone print() statement, we didn’t call our function until after.

Let’s play around with indentation and the flow of execution!

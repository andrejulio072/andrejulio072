Parameters & Arguments
Let’s return to our trip_welcome() function one more time! Let’s modify our function to give a welcome that is a bit more detailed.

def trip_welcome():
  print("Welcome to Tripcademy!")
  print("Looks like you're going to Times Square today.")

trip_welcome()
This will output:

Welcome to Tripcademy!
Looks like you're going to Times Square today.
Our function does a really good job of welcoming anyone who is traveling to Times Square but a really poor job if they are going anywhere else. In order for us to make our function a bit more dynamic, we are going to use the concept of function parameters.

Function parameters allow our function to accept data as an input value. We list the parameters a function takes as input between the parentheses of a function ( ).

Here is a function that defines a single parameter:

def my_function(single_parameter)
  # some code
In the context of our trip_welcome() function, it would look like this:

def trip_welcome(destination):
  print("Welcome to Tripcademy!")
  print("Looks like you're going to " + destination + " today.")
In the above example, we define a single parameter called destination and apply it in our function body in the second print statement. We are telling our function it should expect some data passed in for destination that it can apply to any statements in the function body.

But how do we actually use this parameter? Our parameter of destination is used by passing in an argument to the function when we call it.

trip_welcome("Times Square")
This would output:

Welcome to Tripcademy!
Looks like you're going to Times Square today.
To summarize, here is a quick breakdown of the distinction between a parameter and an argument:

The parameter is the name defined in the parenthesis of the function and can be used in the function body.
A function definition in Python

The argument is the data that is passed in when we call the function and assigned to the parameter name.
Calling a function with a specific value like trip_welcome("Empire State Building")

Let’s write a function with parameters and call the function with an argument to see it all in action!

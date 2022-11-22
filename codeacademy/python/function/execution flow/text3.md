Multiple Parameters
Using a single parameter is useful but functions let us use as many parameters as we want! That way, we can pass in more than one input to our functions.

We can write a function that takes in more than one parameter by using commas:

def my_function(parameter1, parameter2, parameter3):
  # Some code
When we call our function, we will need to provide arguments for each of the parameters we assigned in our function definition.

# Calling my_function
my_function(argument1, argument2)
For example take our trip application’s trip_welcome() function that has two parameters:

def trip_welcome(origin, destination):
  print("Welcome to Tripcademy")
  print("Looks like you are traveling from " + origin)
  print("And you are heading to " + destination)
Our two parameters in this function are origin and destination. In order to properly call our function, we need to pass argument values for both of them.

The ordering of your parameters is important as their position will map to the position of the arguments and will determine their assigned value in the function body (more on this in the next exercise!).

Our function call could look like:

trip_welcome("Prospect Park", "Atlantic Terminal")
In this call, the argument value of "Prospect Park" is assigned to be the origin parameter, and the argument value of"Atlantic Terminal" is assigned to the destination parameter.

The output would be:

Welcome to Tripcademy
Looks like you are traveling from Prospect Park
And you are heading to Atlantic Terminal
Let’s practice writing and calling a multiple parameter function!

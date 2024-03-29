Types of Arguments
In Python, there are 3 different types of arguments we can give a function.

Positional arguments: arguments that can be called by their position in the function definition.

Keyword arguments: arguments that can be called by their name.

Default arguments: arguments that are given default values.

Positional Arguments are arguments we have already been using! Their assignments depend on their positions in the function call. Let’s look at a function called calculate_taxi_price() that allows our users to see how much a taxi would cost to their destination 🚕.

def calculate_taxi_price(miles_to_travel, rate, discount):
  print(miles_to_travel * rate - discount )
In this function, miles_to_travel is positioned as the first parameter, rate is positioned as the second parameter, and discount is the third. When we call our function, the position of the arguments will be mapped to the positions defined in the function declaration.

# 100 is miles_to_travel
# 10 is rate
# 5 is discount
calculate_taxi_price(100, 10, 5)
Alternatively, we can use Keyword Arguments where we explicitly refer to what each argument is assigned to in the function call. Notice in the code example below that the arguments do not follow the same order as defined in the function declaration.

calculate_taxi_price(rate=0.5, discount=10, miles_to_travel=100)
Lastly, sometimes we want to give our function arguments default values. We can provide a default value to an argument by using the assignment operator (=). This will happen in the function declaration rather than the function call.

Here is an example where the discount argument in our calculate_taxi_price function will always have a default value of 10:

def calculate_taxi_price(miles_to_travel, rate, discount = 10):
  print(miles_to_travel * rate - discount )
When using a default argument, we can either choose to call the function without providing a value for a discount (and thus our function will use the default value assigned) or overwrite the default argument by providing our own:

# Using the default value of 10 for discount.
calculate_taxi_price(10, 0.5)

# Overwriting the default value of 10 with 20
calculate_taxi_price(10, 0.5, 20)
Let’s practice using these different types of arguments!

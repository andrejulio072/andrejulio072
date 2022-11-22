Multiple Returns
Sometimes we may want to return more than one value from a function. We can return several values by separating them with a comma. Take a look at this example of a function that allows users in our travel application to check the upcoming week’s weather (starting on Monday):

weather_data = ['Sunny', 'Sunny', 'Cloudy', 'Raining', 'Snowing']

def threeday_weather_report(weather):
  first_day = " Tomorrow the weather will be " + weather[0]
  second_day = " The following day it will be " + weather[1]
  third_day = " Two days from now it will be " + weather[2]
  return first_day, second_day, third_day
This function takes in a set of data in the form of a list for the upcoming week’s weather. We can get our returned function values by assigning them to variables when we call the function:

monday, tuesday, wednesday = threeday_weather_report(weather_data)

print(monday)
print(tuesday)
print(wednesday)
This will print:

Tomorrow the weather will be Sunny
The following day it will be Sunny
Two days from now it will be Cloudy
Let’s practice using multiple returns by returning to our previous code example.

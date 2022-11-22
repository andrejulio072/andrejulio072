Why Functions?
Let’s come back to the trip planning application we just discussed in the previous exercise. The steps we talked about for our program were:

 1. Establish an origin and destination
 2. Calculate the distance/route
 3. Return the best route
If we were to convert our steps into Python code, a very simple version that plans a trip between two popular New York tourist destinations might look like this:

print("Setting the Empire State Building as the starting point and Times Square as our destination.")

print("Calculating the total distance between our points.")

print("The best route is by train and will take approximately 10 minutes.")
Anytime we want to go between these two points we would need to run these three print statements (for now we can assume the best route and time will stay the same).

If our program now had 100 new people trying to find the best directions between the Empire State Building and Times Square, we would need to run each of our three print statements 100 times!

Now, if you’re thinking about using a loop here, your intuition would be totally right! Unfortunately, we won’t be always traveling between the same two locations which means a loop won’t be as effective when we want to customize a trip. We will address this in the upcoming sections!

For now, let’s gain an appreciation for functions.

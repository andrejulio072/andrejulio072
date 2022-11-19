def fizz_buzz():
    counter = 0
    while counter <= 20:
        if (counter % 15 == 0):
            print "FizzBuzz"
        elif (counter % 3 == 0):
            print "Fizz"
        elif (counter % 5 == 0):
            print "Buzz"
        else:
            print counter
        counter += 1


print fizz_buzz()

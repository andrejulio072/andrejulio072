String Representation
One of the first things we learn as programmers is how to print out information that we need for debugging. Unfortunately, when we print out an object we get a default representation that seems fairly useless.

class Employee():
  def __init__(self, name):
    self.name = name

argus = Employee("Argus Filch")
print(argus)
# prints "<__main__.Employee object at 0x104e88390>"
This default string representation gives us some information, like where the class is defined and our computer’s memory address where this object is stored, but is usually not useful information to have when we are trying to debug our code.

We learned about the dunder method __init__(). Now, we will learn another dunder method called __repr__(). This is a method we can use to tell Python what we want the string representation of the class to be. __repr__() can only have one parameter, self, and must return a string.

In our Employee class above, we have an instance variable called name that should be unique enough to be useful when we’re printing out an instance of the Employee class.

class Employee():
  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return self.name

argus = Employee("Argus Filch")
print(argus)
# prints "Argus Filch"
We implemented the __repr__() method and had it return the .name attribute of the object. When we printed the object out it simply printed the .name of the object! Cool!

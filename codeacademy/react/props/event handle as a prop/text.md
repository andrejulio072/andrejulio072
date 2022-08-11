Pass an Event Handler as a prop
Good! You’ve defined a new method on the Talker component class. Now you’re ready to pass that function to another component.

You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

Instructions
1.
Select Talker.js.

You want to pass talk from here to <Button />.

If you want to pass any prop to <Button />, that means that you need to give <Button /> an attribute. Let’s start there.

Inside of Talker‘s render method, give <Button /> the following attribute:

foo="bar"
During the next two checkpoints, you’ll replace those values with the values that you need! Keep them as foo and "bar" for now.

Checkpoint 2 Passed

Hint
Give the <Button /> a new prop: foo="bar".

2.
Your goal is to pass talk from <Talker /> to <Button />.

What prop name should you choose?

It doesn’t really matter! prop attributes will work with just about any name, so long as the name follows the JavaScript variable name rules.

Since you’re going to pass a function named talk, you might as well use talk as your name. Inside of the render method, change your attribute name from foo to talk.

Checkpoint 3 Passed

Hint
Change foo="bar" to talk="bar".

3.
What should your prop value be?

Your prop value should be the information that you want to pass! In this case, you want to pass the method named talk.

Inside of the render method, change your attribute’s value to talk.

Checkpoint 4 Passed

Hint
Change talk="bar" to talk={this.talk}.

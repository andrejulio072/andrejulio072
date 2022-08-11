Put an Event Handler in a Component Class
You can, and often will, pass functions as props. It is especially common to pass event handler functions.

In the next lesson, you will pass an event handler function as a prop. However, you have to define an event handler before you can pass one anywhere. In this lesson, you will define an event handler function.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method.

Take a look in the code editor. On lines 4 through 8, an event handler method is defined, with similar syntax as the render method. On line 12, that event handler method is attached to an event (a click event, in this case).

Instructions
1.
Select Talker.js.

Here we have a nice function named talk that alerts ten thousand “blah”s to your screen. You will eventually use talk as an event handler.

There’s a problem: talk is defined outside of the Talker component class. That’s not how we do things here in React-land!

Rewrite talk, so that it is a method defined in the definition of Talker. Look at Example.js if you get stuck! Don’t forget to NOT separate talk and render with a comma.

Once you’re done, delete the original talk function before clicking Run.

Checkpoint 2 Passed

Hint
The code starts looking like this:

function talk () {
  // ...
}

class Talker extends React.Component {
  render() {
    // ...
  }
}
It should end up looking like this:

class Talker extends React.Component {
  talk() {
    // ...
  }
  render() {
    // ...
  }
}
Concept Review

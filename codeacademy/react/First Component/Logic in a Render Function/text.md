Put Logic in a Render Function
A render() function must have a return statement. However, that isn’t all that it can have.

A render() function can also be a fine place to put simple calculations that need to happen right before a component renders. Here’s an example of some calculations inside of a render function:

class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
Watch out for this common mistake:

class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);

  render() {
    return <h1>The number is {n}!</h1>;
  }
};
In the above example, the line with the const n declaration will cause a syntax error, as it should not be part of the class declaration itself, but should occur in a method like render().

Instructions
1.
Let’s make a render() function with some logic in it.

On lines 1 and 2, import React and ReactDOM.

Checkpoint 2 Passed

Hint
To import React, you’ll write a line that looks like this:

import React from 'react';
You’ll also need to import ReactDOM from 'react-dom'.

2.
Starting on line 20, create a new component class named Friend. Remember, the component class declaration syntax is class YourClassName extends React.Component {}

Give your component class the following render function:

render() {

  return (
    <div>
    </div>
  );
}
Checkpoint 3 Passed

Hint
Declare a component class with class Friend extends React.Component {}. Inside of the curly braces, copy the render() method from the instructions.

3.
Inside the body of the render function, before the return statement, declare a new variable named friend.

Set friend equal to either friends[0], friends[1], or friends[2], depending on which friend sounds most appealing to you.

Checkpoint 4 Passed

Hint
Assign friend to friends[0], friends[1], or friends[2]. Make sure to put that assignment inside of the render() function, after the { but before return.

4.
Inside of the return statement, and inside of the <div></div>, write a nested <h1></h1>.

Inside of the <h1></h1>, inject friend.title.

Checkpoint 5 Passed

Stuck? Get a hint
5.
Still inside of the <div></div>, make a new line after the <h1></h1>.

On the new line, write an <img />.

Give the <img /> an attribute of src={friend.src}.

Checkpoint 6 Passed

Stuck? Get a hint
6.
At the bottom of the file, use ReactDOM.render() to render an instance of Friend. Use the example code as a guide.

Checkpoint 7 Passed

Hint
Call ReactDOM.render() with two arguments: <Friend /> and document.getElementById('app').

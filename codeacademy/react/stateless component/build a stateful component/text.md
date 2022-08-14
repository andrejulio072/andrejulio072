Build a Stateful Component Class
Let’s make a stateful component pass its state to a stateless component.

To make that happen, you need two component classes: a stateful class, and a stateless class.

Instructions
1.
We’ll build the stateful class first.

On line 1 of Parent.js, import the React.js library. Store the library in a variable named React.

On line 2, import the ReactDOM library. Store it in a variable named ReactDOM.

Make lines 3 and 4 empty. You’ll add code to line 3 later.

On line 5, declare a new Parent component. Parent will represent your stateful component class.

Ensure Parent extends React.Component. Add this method to your Parent component class:

render() {
  return <div></div>;
}
Checkpoint 2 Passed

Hint
Lines 1 and 2 will import the libraries that you need. To import React, use import React from 'react';. You’ll also need to import 'react-dom' and store it in the ReactDOM variable.

On line 5, you’ll declare a new Parent component that renders an empty <div>. Here’s a similar-looking component that renders an empty <span>:

class MyComponent extends React.Component {
  render() {
    return <span></span>;
  }
}
2.
Since Parent is supposed to be stateful, it will need to set its initial state. That means that it will need a constructor method.

Before the render method, give Parent a method named constructor. Give constructor one parameter named props.

Inside of constructor()‘s body, call super(props). On the next line, still inside of constructor()‘s body, declare a property named this.state set equal to { name: 'Frarthur' }.

Checkpoint 3 Passed

Hint
Here’s a similar component that sets a similar state.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Alex' };
  }
  render() {
    return <span></span>;
  }
}
Your component will probably look similar to this.

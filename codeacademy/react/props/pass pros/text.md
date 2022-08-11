Pass props From Component To Component
You have learned how to pass a prop to a component:

<Greeting firstName="Esmerelda" />
You have also learned how to access and display a passed-in prop:

render() {
  return <h1>{this.props.firstName}</h1>;
}
The most common use of props is to pass information to a component, from a different component. You haven’t done that yet, but it’s very similar to what you’ve seen already.

In this exercise, you will pass a prop from one component to another.

A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

Instructions
1.
Your mission is to pass a prop to a <Greeting /> component instance, from an <App /> component instance.

If <App /> is going to pass a prop to <Greeting />, then it follows that <App /> is going to render <Greeting />.

Since <Greeting /> is going to be rendered by another component, that means that <Greeting /> needs to use an export statement.

In Greeting.js, delete this statement from line 2:

import ReactDOM from 'react-dom';
At the bottom of Greeting.js, remove the entire call to ReactDOM.render().

On line 3, add the word export to the beginning of the line, before the word class:

export class Greeting extends...
Checkpoint 2 Passed

Hint
We’re going to remove anything about ReactDOM from Greeting.js. Make sure to remove the import (but keep the import of React) and delete the call to ReactDOM.render().

You’ll also need to export the Greeting class by adding the word export before it.

2.
<App /> can’t pass a prop to <Greeting /> until App.js imports the variable Greeting! Until then, the characters <Greeting /> in App.js might as well be nonsense.

Select App.js. Create a new line underneath the line import ReactDOM from 'react-dom';.

On your new line, import the Greeting component class from ./Greeting. Remember to wrap Greeting in curly braces!

Checkpoint 3 Passed

Stuck? Get a hint
3.
In App.js, add a <Greeting /> instance to App‘s render method, immediately underneath the <h1></h1>.

Give <Greeting /> an attribute with a name of “name.” The attribute’s value can be whatever you’d like.

When you click Run, <App /> will render <Greeting />, and pass it a prop!

Checkpoint 4 Passed

Hint
Between the </h1> and <article>, you’ll want to render a <Greeting /> instance. Make sure to pass the name prop with a string value of your choice.

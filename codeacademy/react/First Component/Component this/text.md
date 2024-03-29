Use this in a Component
The word this gets used in React a lot!

You are especially likely to see this inside of the body of a component class declaration. Here’s an example:

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
In the code, what does this mean?

Once you have a guess, scroll down to see the answer.

…

…

…

…

…

…

The simple answer is that this refers to an instance of IceCreamGuy. The less simple answer is that this refers to the object on which this‘s enclosing method, in this case .render(), is called. It is almost inevitable that this object will be an instance of IceCreamGuy, but technically it could be something else.

Let’s assume that this refers to an instance of your component class, as will be the case in all examples in this course. IceCreamGuy has two methods: .food and .render(). Since this will evaluate to an instance of IceCreamGuy, this.food will evaluate to a call of IceCreamGuy‘s .food method. This method will, in turn, evaluate to the string “ice cream.”

Why don’t you need parentheses after this.food? Shouldn’t it be this.food()?

You don’t need those parentheses because .food is a getter method. You can tell this from the get in the above class declaration body.

There’s nothing React-specific about getter methods, nor about this behaving in this way! However, in React you will see this used in this way almost constantly.

this in JavaScript can be a difficult concept! Here is a good resource for understanding this in JavaScript.

Instructions
1.
On line 6, add a getter method to your class body. Your getter method should have a name of name, and a return value of a string:

get name() {
  return 'whatever-your-name-is-goes-here';
}

Stuck? Get a hint
2.
Inside of the render function, in between the <h1></h1> tags, add the text My name is _..

In place of _, get name from this with this.name. Feel free to use the example code as a guide.

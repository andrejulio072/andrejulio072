Render a Component's props
You just passed information to a component’s props object!

You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class’s render method’s return statement.

Instructions
1.
Let’s walk through an example!

On line 11, you can see a piece of information being passed to <Greeting />. The information’s name is firstName.

How could you make firstName show up on the screen?

By including this.props.firstName somewhere in the Greeting class’s render method’s return statement!

On line 6, in between the returned <h1></h1> tags, add the following expression:

Hi there, {this.props.firstName}!
Checkpoint 2 Passed

Hint
The empty <h1></h1> will become <h1>Hi there, {this.props.firstName}!</h1> when you’re done with it.

2.
In the ReactDOM.render() call, change firstName‘s value to a different string.

Click Run. Once the browser refreshes, a new name should appear on the screen.

Checkpoint 3 Passed

Hint
Find the value of the firstName prop, and change it to anything other than “Groberta”. How about “Porthos”?

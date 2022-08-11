Access a Component's props
Every component has something called props.

A component’s props is an object. It holds information about that component.

To see a component’s props object, you use the expression this.props. Here’s an example of this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
Most of the information in this.props is pretty useless! But some of it is extremely important, as you’ll see.

Instructions
1.
Look at PropsDisplayer.js.

On line 6, you can see a variable named stringProps. stringProps is equal to a stringified version of this.props.

On line 11, inject stringProps in between the <h2></h2> tags.

Checkpoint 2 Passed

Hint
The once-empty <h2></h2> will become <h2>{stringProps}</h2> when you’re done with it.

2.
On line 18, call ReactDOM.render().

For ReactDOM.render()‘s first argument, pass in an instance of PropsDisplayer.

For ReactDOM.render()‘s second argument, pass in document.getElementById('app').

Click Run, and get ready to see <PropsDisplayer />‘s props object!

… hm. Kind of a letdown, huh.

Despite what you see in the browser, <PropsDisplayer />‘s props object isn’t really empty. It has some properties that JSON.stringify doesn’t detect. But even if you could see those properties, the props object still wouldn’t have much of value to show you right now.

But it’s there!

Checkpoint 3 Passed

Hint
Call ReactDOM.render() with two arguments: <PropsDisplayer /> and document.getElementById('app').

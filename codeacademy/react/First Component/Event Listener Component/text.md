Use an Event Listener in a Component
Render functions often contain event listeners. Here’s an example of an event listener in a render function:

render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
Recall that an event handler is a function that gets called in response to an event. In the above example, the event handler is myFunc().

In React, you define event handlers as methods on a component class. Like this:

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
Notice that the component class has two methods: .myFunc() and .render(). .myFunc() is being used as an event handler. .myFunc() will be called any time that a user hovers over the rendered <div></div>.

Instructions
1.
In app.js, find the <button></button> inside of the render function.

Give this <button></button> an onClick attribute. The attribute’s value should be the .scream() method.

Feel free to use the example code as a guide.


Stuck? Get a hint
2.
At the bottom of the file, render a <Button /> using ReactDOM.render(). For ReactDOM.render()‘s second argument, pass in document.getElementById('app').

Once your component renders, click on the button in the browser. Bone-chilling!

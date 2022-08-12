Access a Component's state
To read a component’s state, use the expression this.state.name-of-property:

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
The above component class reads a property in its state from inside of its render function.

Just like this.props, you can use this.state from any property defined inside of a component class’s body.

Instructions
1.
In App.js, get rid of the text inside of the <h1></h1>.

Instead, in between the <h1></h1> tags, read your state‘s title property.

Checkpoint 2 Passed

Hint
The <h1> contains a bunch of text, but you don’t need it. When you’re done, it should instead contain {this.state.title} inside.

2.
At the bottom of the file, render <App /> using ReactDOM.render().

See your component’s state on display. Truly, you have the best of apps.

Checkpoint 3 Passed

Hint
Call ReactDOM.render() with two arguments: <App /> and document.getElementById('app').

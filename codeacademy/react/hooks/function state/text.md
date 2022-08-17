Update Function Component State
Let’s get started with the State Hook, the most common Hook used for building React components. The State Hook is a named export from the React library, so we import it like this:

import React, { useState } from 'react';
useState() is a JavaScript function defined in the React library. When we call this function, it returns an array with two values:

current state - the current value of this state
state setter - a function that we can use to update the value of this state
Because React returns these two values in an array, we can assign them to local variables, naming them whatever we like. For example:

const [toggle, setToggle] = useState();
Let’s have a look at an example of a function component using the State Hook:

import React, { useState } from react;
 
function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle(On)}>On</button>
      <button onClick={() => setToggle(Off)}>Off</button>
    </div>
  );
}
Notice how the state setter function, setToggle(), is called by our onClick event listeners. To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() function with the next state value as an argument.

No need to worry about binding functions to class instances, working with constructors, or dealing with the this keyword. With the State Hook, updating state is as simple as calling a state setter function.

Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again. The magic of useState() is that it allows React to keep track of the current value of state from one render to the next!

Instructions
1.
Import the default export from the ‘react’ library and call it React. We will be using the State Hook, so go ahead and import the named export useState from the ‘react’ library as well.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Use const to declare and assign the return values from calling useState() to color and setColor.

Checkpoint 3 Passed

Stuck? Get a hint
3.
In the JSX, use onClick event listeners to call the setColor() state setter function with the appropriate color when the user clicks on each of these buttons.

Checkpoint 4 Passed

Stuck? Get a hint
4.
Update the divStyle object so that the backgroundColor property is set to our current state value instead of always showing purple.

Checkpoint 5 Passed

Stuck? Get a hint
Concept Review

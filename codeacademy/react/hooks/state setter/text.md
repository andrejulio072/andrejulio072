Use State Setter Outside of JSX
Let’s see how to manage the changing value of a string as a user types into a text input field:

import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}
Let’s break down how this code works!

The square brackets on the left side of the assignment operator signal array destructuring
The local variable named email is assigned the current state value at index 0 from the array returned by useState()
The local variable named setEmail() is assigned a reference to the state setter function at index 1 from the array returned by useState()
It’s convention to name this variable using the current state variable (email) with “set” prepended
The JSX input tag has an event listener called onChange. This event listener calls an event handler each time the user types something in this element. In the example above, our event handler is defined inside of the definition for our function component, but outside of our JSX. Earlier in this lesson, we wrote our event handlers right in our JSX. Those inline event handlers work perfectly fine, but when we want to do something more interesting than just calling the state setter with a static value, it’s a good idea to separate that logic from everything else going on in our JSX. This separation of concerns makes our code easier to read, test, and modify.

This is so common in React code, that we can comfortably simplify this:

const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
To this:

const handleChange = (event) => setEmail(event.target.value);
Or even, use object destructuring to just write this:

const handleChange = ({target}) => setEmail(target.value);
All three of these code snippets behave the same way, so there really isn’t a right and wrong between these different ways of doing this. We’ll use the last, most concise version moving forward.

Instructions
1.
Declare and assign values for our current state and state setter with useState(). Use phone as the name of our current state variable.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Add the value attribute and the onChange event listener to our JSX input tag. Give these attributes the values of our current state variable and event handler function.

Checkpoint 3 Passed

Stuck? Get a hint
3.
Use our state setter to update the state only when the value from the user’s change event passes our regular expression test for valid phone number strings.

Curious about the /^\d{1,10}$/ in our code? Check out this great lesson to learn about regular expressions!

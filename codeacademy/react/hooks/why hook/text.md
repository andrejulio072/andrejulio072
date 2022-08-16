Why Use Hooks?
As React developers, we love breaking down complex problems into simple pieces.

Classes, however, are not simple. They:

are difficult to reuse between components
are tricky and time-consuming to test
have confused many developers and caused lots of bugs
The React core team heard all of this feedback from developers like us, and they engineered an incredible solution for us! React 16.8+ supports Hooks. With Hooks, we can use simple function components to do lots of the fancy things that we could only do with class components in the past.

React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Hooks don’t work inside classes — they let us use fancy React features without classes. Keep in mind that function components and React Hooks do not replace class components. They are completely optional; just a new tool that we can take advantage of.

Note: If you’re familiar with lifecycle methods of class components, you could say that Hooks let us “hook into” state and lifecycle features directly from our function components.

React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the docs. In this lesson, we’ll learn different ways to manage state in a function component.

Instructions
1.
Review the class component defined in the AppClass.js file.

Notice how the rendering logic has been delegated to separate presentational function components. This AppClass component uses a constructor, its own class methods, as well as this.setState() and this.render() methods from React’s Component class.

Make some predictions about how this code behaves, then run the code to check your predictions!

Checkpoint 2 Passed
2.
Buckle your seat belt. We are about to adventure into new territory.

Open the AppFunction.js file. We will learn how this code works in the next few exercises. Don’t worry about the details of what is going on here just yet, but take a few moments to read through the definition of this function component and develop some theories about what this code may be doing.

Open the index.js file and change where this module imports the App component from, so that we can render the AppFunction instead of the AppClass component. Press run to see how the code behaves!

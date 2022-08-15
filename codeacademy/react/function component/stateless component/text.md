Stateless Functional Components
In the code editor, take a look at Example.js. The first Example component is defined as a JavaScript class, but it doesn’t have to be! In React, we can also define components as JavaScript functions — we call them function components to differentiate them from class components.

In the latest versions of React, function components can do everything that class components can do. In most cases, however, function components offer a more elegant, concise way of creating React components. This lesson will focus on converting a class component to a function component and adding props, which are available in all versions of React.

Compare the Example class component and the Example function component. For the most basic function components, all you need to do is remove the beginning render() { and ending } of the render() method:

render() { // Delete this
  return <h1>Hello</h1>
} // Delete this
To put it in other words: the function component should return the same JSX that was originally returned by the render() method.

Instructions
1.
Select Friend.js.

Rewrite the Friend component class as a function component.

Use Example.js as a guide. Make sure to delete the original Friend class component when you’re done.

Checkpoint 2 Passed

Hint
You’ll be rewriting the Friend component in Friend.js. It will look something like this:

export const Friend = () => {
  // Return something here.
};
If you lose the image URL, here it is again:

https://content.codecademy.com/courses/React/react_photo-octopus.jpg

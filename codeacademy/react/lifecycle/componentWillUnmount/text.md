componentWillUnmount
Our clock is working, but it has an important problem. We never told the interval to stop, so it’ll keep running that function forever (or at least, until the user leaves/refreshes the page).

When the component is unmounted (in other words, removed from the page), that timer will keep on ticking, trying to update the state of a component that’s effectively gone. This means your users will have some JavaScript code running unnecessarily, which will hurt the performance of your app.

React will log a warning that looks something like this:

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You’ll also see warnings in your browser console. Even worse, this can lead to subtle, annoying bugs.

All this bad stuff can happen if we fail to clean up a side-effect of a component. In our case this is a call to setInterval(), but components can have lots of other side-effects: loading external data with AJAX, doing manual tweaking of the DOM, setting a global value, and more. We try to limit our side-effects, but it’s difficult to build an interesting app with truly zero side-effects.

In general, when a component produces a side-effect, you should remember to clean it up.

JavaScript gives us the clearInterval() function. setInterval() can return an ID, which you can then pass into clearInterval() to clear it. Here’s the code we’ll want to use:

const oneSecond = 1000;
this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);

// Some time later...
clearInterval(this.intervalID);
At a high level, we want to continue to set up our setInterval() in componentDidMount(), but then we want to clear that interval when the clock is unmounted.

Let’s introduce a new lifecycle method: componentWillUnmount(). componentWillUnmount() is called in the unmounting phase, right before the component is completely destroyed. It’s a useful time to clean up any of your component’s mess.

In our case, we’ll use it to clean up the clock’s interval.

Instructions
1.
Try running the code as is and toggling the clock off. You should see a React warning message appear.

Checkpoint 2 Passed
2.
Save the interval ID into a variable, this.intervalID. Replace the line that starts with setInterval() with this.intervalID = setInterval(....

This won’t do anything yet. We’ll use it in the next step.

Checkpoint 3 Passed

Hint
Only one line is going to change: the line that starts with setInterval().

3.
Add a new method, componentWillUnmount(), that cleans up the interval with clearInterval(this.intervalID).

Notice that you can hide and show the component and everything works fine!


Hint
Here’s how you’d add a method called foo() that does the thing we want:

foo() {
  clearInterval(this.intervalID);
}
Your method won’t be called foo(), though.

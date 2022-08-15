COMPONENT LIFECYCLE METHODS
Introduction to Lifecycle Methods
React components have several methods, called lifecycle methods, that are called at different parts of a component’s lifecycle. This is how you, the programmer, deal with the lifecycle of a component.

You may not have known it, but you’ve already used two of the most common lifecycle methods: constructor() and render()! constructor() is the first method called during the mounting phase. render() is called later during the mounting phase, to render the component for the first time, and during the updating phase, to re-render the component.

Notice that lifecycle methods don’t necessarily correspond one-to-one with part of the lifecycle. constructor() only executes during the mounting phase, but render() executes during both the mounting and updating phase.

With this new understanding, let’s build a simple clock component.

Instructions
1.
<Clock /> is currently a non-working React component. Give it a render() method that renders an empty <div> to start.

(Remember: render() will be called when <Clock /> mounts and whenever it updates, as part of its lifecycle.)

Checkpoint 2 Passed

Stuck? Get a hint
2.
We want to store the current time in <Clock />‘s state. Create a constructor. Inside, set the initial state to { date: new Date() }. Don’t forget to call super(props).

(Remember: the constructor is the first thing called when the component instance is mounted.)

In the next step, we’ll “wire up” the state to the screen.

Checkpoint 3 Passed

Stuck? Get a hint
3.
“Wire up” the state to the screen. Calling this.state.date.toLocaleTimeString() will produce a helpful, human-readable representation of the current time.

Fill in your empty <div> with {this.state.date.toLocaleTimeString()}.

Notice that this is static—it doesn’t update, even as time goes by.

(Remember: the constructor is the first thing called during mounting. render() is called later, to show the component for the first time. If it happened in a different order, render() wouldn’t have access to this.state, and it wouldn’t work.)

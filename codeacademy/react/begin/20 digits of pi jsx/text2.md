Variables in JSX
When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

// Declare a variable:
const name = 'Gerdo';

// Access your variable
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

Use a Variable Attribute in a Component
Take a look at this JavaScript object named redPanda:

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};
How could you render a React component, and get a picture with redPanda‘s properties?

Select RedPanda.js to see one way to do it.

Note all of the curly-brace JavaScript injections inside of the render function! Lines 16, 17, and 18 all use JavaScript injections.

You can, and often will, inject JavaScript into JSX inside of a render function.

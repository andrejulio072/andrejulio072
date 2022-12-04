Creating a Grid
To set up a grid, you need to have both a grid container and grid items. The grid container will be a parent element that contains grid items as children and applies overarching styling and positioning to them.

To turn an HTML element into a grid container, you must set the element’s display property to one of two values:

grid — for a block-level grid.
inline-grid — for an inline grid.
Then, you can assign other properties to lay out the grid to suit your needs.

Instructions
1.
To start, look at index.html to see all seven items in the grid. The grid container is of class grid.

Back in style.css, in the ruleset for elements that have the class grid, set the display property to grid.

Right now, we haven’t specified the number of rows or columns in our grid, so every item is sitting on a new row. We’ll learn how to structure grid rows and columns in the next couple of exercises.

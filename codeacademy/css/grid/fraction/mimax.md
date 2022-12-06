minmax
So far, all of the grids that we have worked with have been a fixed size. The grid in our example has been 400 pixels wide and 500 pixels tall. But sometimes you might want a grid to resize based on the size of your web browser.

In these situations, you might want to prevent a row or column from getting too big or too small. For example, if you have a 100-pixel wide image in your grid, you probably don’t want its column to get thinner than 100 pixels! The minmax() function can help us solve this problem.

.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}
In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, however, will vary in size as the overall grid resizes. The second column will always be between 100 and 500 pixels wide.

Instructions
1.
To see minmax() in action, we need to first make the grid have a variable width. Delete the width declaration from .grid.

If you resize your browser, you will see the grid change size with the window.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Using minmax(), change the second column to be between 50 pixels and 300 pixels.

Try resizing your browser window. What happens to the other columns when the second column reaches the 300 pixel limit?

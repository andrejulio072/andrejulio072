Align Content
In the previous exercise, we positioned grid items within their rows. align-content positions the rows along the column axis, or from top to bottom, and is declared on grid containers.

It accepts these positional values:

start — aligns the grid to the top of the grid container
end — aligns the grid to the bottom of the grid container
center — centers the grid vertically in the grid container
stretch — stretches the grid items to increase the size of the grid to expand vertically across the container
space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
space-between — includes an equal amount of space between grid items and no space at either end
space-evenly — places an even amount of space between grid items and at either end
There are several other values that align-content accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="top">Top</div>
  <div class="bottom">Bottom</div>
</main>
main {
  display: grid;
  height: 600px;
  grid-template-rows: 200px 200px;
  grid-template-areas: "top"
                       "bottom";
  align-content: center;
}
In the example above, the grid container is 600 pixels tall, but we only specified two rows that are 200 pixels each. This will leave 200 pixels of unused space in the grid container.
align-content: center; positions the rows in the center of the grid, leaving 100 pixels at the top and 100 pixels at the bottom of the grid.
Instructions
1.
In style.css, inside the main ruleset, add the height property and set its value to 1600px.

Scroll all the way to the bottom of the web page. Notice the empty space at the bottom?

This is because the rows are each 450 pixels tall (for a total of 1350 pixels), but the container is 1600 pixels.


Stuck? Get a hint
2.
To center the content on the page, add the align-content property to the main ruleset and set its value to center.

Feel free to play around with some other values to see how the grid container can positioned!

Align Items
In the previous two exercises, we learned how to position grid items and grid columns from left to right across the page. Now we’ll learn how to position grid items from top to bottom!

align-items is a property that positions grid items along the block, or column axis. This means that it positions items from top to bottom. This property is declared on grid containers.

align-items accepts these values:

start — aligns grid items to the top side of the grid area
end — aligns grid items to the bottom side of the grid area
center — aligns grid items to the center of the grid area
stretch — stretches all items to fill the grid area
There are several other values that align-items accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>
main {
  display: grid;
  grid-template-rows: repeat(3, 400px);
  align-items: center;
}
In the example above, we use align-items to adjust the positioning of some elements on this web page.

There is a grid container with three rows that are 400 pixels tall.
The container has three grid items that do not have a specified width.
Without setting the align-items property, these elements will span the height of the row they are in (400 pixels).
By setting the align-items property to center, the .card <div>s will be centered vertically inside of their rows. They will only be as tall as necessary to contain their content (the words Card 1, etc).
If we specify a height for the .card elements, they will not stretch the height of their row even if align-items: stretch; is set.

Overlapping Elements
Another powerful feature of CSS Grid Layout is the ability to easily overlap elements.

When overlapping elements, it is generally easiest to use the grid-area property with grid row names. Remember that grid-area will set the starting and ending positions for both the rows and columns of an item.

<div class="container">
  <div class="info">Info!</div>
  <img src="#" />
  <div class="services">Services!</div>
</div>
.container {
  display: grid;
  grid-template: repeat(8, 200px) / repeat(6, 100px);
}

.info {
  grid-area: 1 / 1 / 9 / 4;
}

.services {
  grid-area: 1 / 4 / 9 / 7;
}

img {
  grid-area: 2 / 3 / 5 / 5;
  z-index: 5;
}
In the example above, there is a grid container with eight rows and six columns. There are three grid items within the container — a <div> with the class info, a <div> with the class services, and an image.

The info section covers all eight rows and the first three columns. The services section covers all eight rows and the last three columns.

The image spans the 2nd, 3rd, and 4th rows and the 3rd and 4th columns.

The z-index property tells the browser to render the image element on top of the services and info sections so that it is visible.

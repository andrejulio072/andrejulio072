Grid Auto Rows and Grid Auto Columns
CSS Grid provides two properties to specify the size of grid tracks added implicitly: grid-auto-rows and grid-auto-columns. These properties are declared on grid containers.

grid-auto-rows specifies the height of implicitly added grid rows. grid-auto-columns specifies the width of implicitly added grid columns.

grid-auto-rows and grid-auto-columns accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns:

pixels (px)
percentages (%)
fractions (fr)
the repeat() function
<body>
  <div>Part 1</div>
  <div>Part 2</div>
  <div>Part 3</div>
  <div>Part 4</div>
  <div>Part 5</div>
</body>
body {
  display: grid;
  grid: repeat(2, 100px) / repeat(2, 150px);
  grid-auto-rows: 50px;
}
In the example above, there are 5 <div>s. However, in the body ruleset, we only specify a 2-row, 2-column grid — four grid cells.

The fifth <div> will be added to an implicit row that will be 50 pixels tall.

If we did not specify grid-auto-rows, the rows would be auto-adjusted to the height of the content of the grid items.

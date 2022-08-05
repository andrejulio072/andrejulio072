Clear
The float property can also be used to float multiple elements at once. However, when multiple floated elements have different heights, it can affect their layout on the page. Specifically, elements can “bump” into each other and not allow other elements to properly move to the left or right.

The clear property specifies how elements should behave when they bump into each other on the page. It can take on one of the following values:

left—the left side of the element will not touch any other element within the same containing element.
right—the right side of the element will not touch any other element within the same containing element.
both—neither side of the element will touch any other element within the same containing element.
none—the element can touch either side.
div {
  width: 200px;
  float: left;
}

div.special {
  clear: left;
}
In the example above, all <div>s on the page are floated to the left side. The element with class special did not move all the way to the left because a taller <div> blocked its positioning. By setting its clear property to left, the special <div> will be moved all the way to the left side of the page.

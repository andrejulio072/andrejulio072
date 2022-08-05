Position: Absolute
Another way of modifying the position of an element is by setting its position to absolute.

When an element’s position is set to absolute, all other elements on the page will ignore the element and act like it is not present on the page. The element will be positioned relative to its closest positioned parent element, while offset properties can be used to determine the final position from there. Take a look at the image below:

Diagram of element with absolute position

The “Website building in progress. Please come back later!” text is displaced from its static position at the top left corner of its parent container. It has offset property declarations of top: 300px; and right: 0px;, positioning it 300 pixels down, and 0 pixels from the right side of the page.

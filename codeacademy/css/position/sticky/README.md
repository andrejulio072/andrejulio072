Position: Sticky
Since static and relative positioned elements stay in the normal flow of the document, when a user scrolls the page (or parent element) these elements will scroll too. And since fixed and absolute positioned elements are removed from the document flow, when a user scrolls, these elements will stay at their specified offset position.

The sticky value is another position value that keeps an element in the document flow as the user scrolls, but sticks to a specified position as the page is scrolled further. This is done by using the sticky value along with the familiar offset properties, as well as one new one.

.box-bottom {
  background-color: darkgreen;
  position: sticky;
  top: 240px;
}
In the example above, the .box-bottom <div> will remain in its relative position, and scroll as usual. When it reaches 240 pixels from the top, it will stick to that position until it reaches the bottom of its parent container where it will “unstick” and rejoin the flow of the document.

Diagram of an element with sticky position

Instructions
1.
Inside style.css, change the position of the elements with the class question to sticky.

Checkpoint 2 Passed

Hint
Inside the curly braces of the .question ruleset, the position property should have a value of sticky.

selector {
  property: value;

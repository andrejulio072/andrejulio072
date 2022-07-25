DISPLAY AND POSITIONING
Position: Relative
One way to modify the default position of an element is by setting its position property to relative.

This value allows you to position an element relative to its default static position on the web page.

.green-box {
  background-color: green;
  position: relative;
}
Although the code in the example above instructs the browser to expect a relative positioning of the .green-box element, it does not specify where the .green-box element should be positioned on the page. This is done by accompanying the position declaration with one or more of the following offset properties that will move the element away from its default static position:

top - moves the element down from the top.
bottom - moves the element up from the bottom.
left - moves the element away from the left side (to the right).
right - moves the element away from the right side (to the left).
You can specify values in pixels, ems, or percentages, among others, to dial in exactly how far you need the element to move. It’s also important to note that offset properties will not work if the element’s position property is the default static.

.green-box {
  background-color: green;
  position: relative;
  top: 50px;
  left: 120px;
}
In the example above, the element of green-box class will be moved down 50 pixels, and to the right 120 pixels, from its default static position. The image below displays the new position of the box.

Diagram of an element with relative position

Offsetting the relative element will not affect the positioning of other elements.

Instructions
1.
In style.css, inside the .question ruleset, change the position property to relative.


Stuck? Get a hint
2.
Next, in style.css, offset .question 40 pixels from the top.

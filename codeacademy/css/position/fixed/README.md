Position: Fixed
When an element’s position is set to absolute, as in the last exercise, the element will scroll with the rest of the document when a user scrolls.

We can fix an element to a specific position on the page (regardless of user scrolling) by setting its position to fixed, and accompanying it with the familiar offset properties top, bottom, left, and right.

.title {
  position: fixed;
  top: 0px;
  left: 0px;
}
In the example above, the .title element will remain fixed to its position no matter where the user scrolls on the page, like in the image below:

Diagram of position fixed

This technique is often used for navigation bars on a web page.

Instructions
1.
In style.css, change the position property inside of the header rule to fixed. Scroll up and down the web page. What do you notice?

Checkpoint 2 Passed

Stuck? Get a hint
2.
Notice that part of the “Welcome” section is now covered up by the header. That’s because when we changed the position of the header to fixed, we removed it from the flow of the html document. Let’s fix that. Set the position of the .welcome element to relative.

Checkpoint 3 Passed

Stuck? Get a hint
3.
Offset the “Welcome” section by 200 pixels from the top. Everything might not be displaying correctly just yet; we’ll fix it in a later exercise.

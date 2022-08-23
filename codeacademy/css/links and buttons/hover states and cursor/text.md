Hover States and Cursors
In addition to styling elements themselves, other signifiers and visual feedback can be utilized during user interaction. The CSS pseudo-class :hover can be used to style elements on mouse hover. For instance, to change the color of link anchor text from blue to orange when a user hovers over it, the following CSS could be used:

a {
  color: blue;
}

a:hover {
  color: orange;
}
The first rule sets link colors to blue by default, and when a user mouses over a link, the second rule will override the color attribute of the <a> tag and cause the text to turn orange. When the user moves the cursor away from the link, the text color will revert to blue.

In addition to any text style changes when hovering over a link, the user’s cursor should change from the default appearance to a pointing hand. The CSS cursor property is used to control this behavior. For example, to add this behavior to all <a> tags, the following rule could be used:

a {
  cursor: pointer;
}
Luckily, this behavior is generally included in browser user agent stylesheets, and it also exists in the HTML5 default styles.

Hover state styling should never be used as the sole indication that something is a link. Users should not be forced to move their mouse over an entire document to tell what might be clickable. Additionally, hover states are not accessible in mobile browsers. Mobile devices do not generally have on-screen cursors, and users must actually touch the device (and possibly trigger a click event) to interact.

Instructions
1.
Time to add some hover styling to the page links. Add a rule to remove the underline text-decoration property on mouse hover. Keep the color the same so that the links are still differentiated from other text.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Add a declaration to also change the cursor to pointer. Even though this behavior is seen when the mouse is hovered over, you should add it to the rule for all <a> tags, as the browser will only change cursor styles on hover by default. Putting the rule on an a:hover rule can cause unwanted behavior in some cases.

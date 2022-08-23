Link States
Links have four main states: normal (not clicked), hover, active (clicked), and visited. These four states have associated CSS pseudo-classes: :link, :hover, :active, and :visited. These four states can be used to give a full range of visual feedback to users about the status of their link interaction.

Each state should still make it clear that the element in question is a link, meaning it should not make text identical to non-link text or alter the link’s appearance so much that users could perceive its behavior differently.

The ordering of link state pseudo-class rules is important to reveal the proper information. When a user hovers and then clicks a link, those styles should always override the static styling surrounding a user’s history with the link (unvisited :link and :visited). The proper order of these rules is:

:link
:visited
:hover
:active
This ordering will ensure that the rules cascade properly and the user can receive the most applicable visual feedback about the state of the link.

Instructions
1.
Let’s add styling for different link states using pseudo-classes. Start by creating a rule to set the color to #466995 for any :visited <a> tag.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Oops, if you click on any of the question links at the top of the page and then scroll back up, you’ll notice that the links you’ve already visited have now blended in with the background! These links are internal to the page and serve to scroll the window, so we can eliminate the separate :visited style. Create a rule to set the color of any :visited .question-link class elements to #ffffff. Because the question-link class is more specific than <a> tags in general, this rule should override.


Stuck? Get a hint
3.
Now, let’s add some behavior to cover the :active states. Create a rule to set all <a> tags’ active color to #DBE9EE.


Stuck? Get a hint
4.
Now, interact with the links to see the active state change. The .question-link elements at the top of the page may seem to be behaving oddly. Because of the specificity of the class selector of .question-link versus the tag selector of a, question links aren’t triggering the same active behavior as all <a> tags. They are, however, showing their :visited pseudo-class if they’ve already been clicked. To remedy this, add a rule to style :active .question-links.

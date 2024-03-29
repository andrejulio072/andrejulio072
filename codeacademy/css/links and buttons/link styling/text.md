Link Styling
The most important aspect of styling links is differentiating links from surrounding text. The default blue-text, underlined link style accomplishes this differentiation using two CSS properties: color and text-decoration. These are both good ways to differentiate a link, and they are strong, familiar signifiers to most web users. Additionally, you could use CSS properties for background-color, font-weight, or border.

Link styles should not be replicated in other page text. Link color should sufficiently contrast the text colors in the rest of the design. For example, if links are underlined, other text should not be.

Anchor text, the text itself of a link, should be descriptive of the linked resource. Although this is not strictly a design problem, it is important for usability, accessibility, and SEO. For example, the link at the beginning of this paragraph would be much more difficult to parse with a screen reader if it were re-written as follows:

Text for links, known as anchor text, should be <a href="https://en.wikipedia.org/wiki/Anchor_text" rel="noopener noreferrer" target="_blank">descriptive</a>.
Instructions
1.
Let’s make the default link style match our color scheme a bit better. Leave the underline, but change the link color to #466995.

Checkpoint 2 Passed

Hint
a {
  color: #466995;
  text-decoration: underline;
}

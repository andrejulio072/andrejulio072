Browser Link Styles
Web browsers have always taken account of the importance of using signifiers for navigation. By default, browsers include a user agent stylesheet, a set of default styles included with the browser (“user agent”) for use on all web pages. The HTML5 specification defines a set of default behavior for rendering content. These styles are used to ensure that a raw HTML file is styled to be reasonably readable by any user, and user agent stylesheets include styling for headings, tables, links, and more basic HTML elements. Most users do not see these styles too often, because designers override them with their own custom designs. However, it’s important to note that maintaining a consistent user experience pattern, like the default behavior applied by browsers, is important for creating a consistent experience.

Traditionally, links are differentiated from regular text using blue text and underlines to draw users’ attention to their clickability. Many websites and user agent stylesheets still use these link styles.

Browsers also style two other link states: clicked (‘active’), and previously visited. In most user agent stylesheets, clicked (but not yet followed) links appear with red text, and previously visited links are styled with purple text.

Instructions
1.
If you’d like to see the current state of styling, you can open initial.css. The basic layout is okay, but, no links are properly styled. Throughout this exercise, you’ll make all your changes to style.css. Let’s start by reinstating some of the classic browser link styles. First, add a CSS rule to make <a> tags blue by setting the color property to blue in order to distinguish links.

2.
Starting to look better already! Now, add an underline to the link text inside <a> tags using the CSS text-decoration property.

Typography
In this lesson, we’ll focus on typography, the art of arranging text on a page. We’ll look at:

How to style and transform fonts.
How to lay text out on a page.
and how to add external fonts to your web pages.
Some of the most important information a user will see on a web page will be textual. Styling text to make page content accessible and engaging can significantly improve user experience. Let’s begin!


TYPOGRAPHY
Font Family
You may remember from the Visual Rules lesson that the font of an element can be changed using the font-family property.

h1 {
  font-family: Arial;
}
In the example above, the font family for all <h1> heading elements have been set to Arial.

Let’s talk about some things to keep in mind when setting font-family values.

Multi-Word Values
When specifying a typeface with multiple words, like Times New Roman, it is recommended to use quotation marks (' ') to group the words together, like so:

h1 {
  font-family: 'Times New Roman';
}
Web Safe Fonts
There is a selection of fonts that will appear the same across all browsers and operating systems. These fonts are referred to as web safe fonts. You can check out a complete list of web safe fonts here.(https://www.cssfontstack.com/)

Fallback Fonts and Font Stacks
Web safe fonts are good fallback fonts that can be used if your preferred font is not available.

h1 {
  font-family: Caslon, Georgia, 'Times New Roman';
}
In the example above, Georgia and Times New Roman are fallback fonts to Caslon. When you specify a group of fonts, you have what is known as a font stack. A font stack usually contains a list of similar-looking fonts. Here, the browser will first try to use the Caslon font. If that’s not available, it will try to use a similar font, Georgia. And if Georgia is not available, it will try to use Times New Roman.

Serif and Sans-Serif
You may be wondering what features make a font similar to another font. The fonts Caslon, Georgia, and Times New Roman are Serif fonts. Serif fonts have extra details on the ends of each letter, as opposed to Sans-Serif fonts, which do not have the extra details.

Serif and Sans-Serif fonts

serif and sans-serif are also keyword values that can be added as a final fallback font if nothing else in the font stack is available.

h1 {
  font-family: Caslon, Georgia, 'Times New Roman', serif;
}
In this final example, the font stack has 4 fonts. If the first 3 fonts aren’t available, the browser will use whatever serif font is available on the system.

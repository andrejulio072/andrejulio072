In this practice session, we are going to practice using the anchor tag in HTML to create hyperlinks on a webpage. You will also practice the href, target, and title attributes.

1. We’ve already done a bit of a setup for you by adding some scaffolding code for you. You can start working directly inside the body element.

2. Start by writing a simple paragraph that contains some keywords like Google, Apple, Microsoft, and Facebook.
<p>
  With a market value of 961.3 billion U.S. dollars, Apple led the ranking of
  the world's largest companies in 2018. Some of the most recognizable companies
  in the world, Amazon, Google, Microsoft, and Facebook followed closely behind,
  rounding out the top five.
</p>


3. After that, create an anchor tag for each of the keywords. For example, for "Google", add the href attribute and set the value to "https://www.google.com". Also set the title attribute and set it to any text that you want.
<a href="https://www.google.com" title=" Google">Google</a>


4. Finally, add the target attribute and set it to "_blank" to ensure that the link opens a new tab/window.
<a href="https://www.google.com" title="Google" target="_blank"> Google</a>



5. Your completed code should look like this:
<body>
    <p>
      With a market value of 961.3 billion U.S. dollars,
      <a href="https://www.apple.com" target="_blank" title="Apple">Apple</a>
      led the ranking of the world's largest companies in 2018. Some of the most recognizable companies in the world,
      <a href="https://www.amazon.com" target="_blank" title="Amazon">Amazon</a>,
      <a href="https://www.google.com" target="_blank" title="Google">Google</a>,
      <a href="https://www.microsoft.com" target="_blank" title="Microsoft">Microsoft</a>, and
      <a href="https://www.facebook.com" target="_blank" title="Facebook">Facebook</a>
      followed closely behind, rounding out the top five.
    </p>
  </body>

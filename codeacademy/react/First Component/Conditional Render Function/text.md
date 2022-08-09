Use a Conditional in a Render Function
How might you use a conditional statement inside of a render() function?

Select TodaysPlan.js to see one way of doing it.

Notice that the if statement is located inside of the render function, but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.

Instructions
1.
Select app.js. You can see a variable named fiftyFifty.

fiftyFifty will equal true half the time and false half the time.

Starting on line 7, write a new component class named TonightsPlan.

If fiftyFifty is true, then TonightsPlan should render this element:

<h1>Tonight I'm going out WOOO</h1>
If fiftyFifty is false, then TonightsPlan should render this element:

<h1>Tonight I'm going to bed WOOO</h1>
Use TodaysPlan as a guide, but you don’t have to stick to it exactly. There are many valid ways to solve this problem using a conditional.


Stuck? Get a hint
2.
Render an instance of TonightsPlan and see what fate has in store.


Stuck? Get a hint

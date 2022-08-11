this.props.children
Every component’s props object has a property named children.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js. In Example 1, <BigButton>‘s this.props.children would equal the text, “I am a child of BigButton.”

In Example 2, <BigButton>‘s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>‘s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

Instructions
1.
Select App.js.

Notice that App renders two <List></List> instances, and that each <List></List> has at least one <li></li> child.

Now open List.js, and take a look at the List component class.

Think about the fact that each List instance is going to be rendered with two JSX tags:

<List>  // opening tag
</List> // closing tag
…and that there will be at least one <li></li> child in between those tags:

<List>  // opening tag
  <li></li> // child
</List> // closing tag
Click Run.


Stuck? Get a hint
2.
You can see two list titles in the browser, but no list items! How can you make the list-items appear?

In List.js, in the render function, in between <ul></ul> tags, add {this.props.children}.


Stuck? Get a hint
3.
BONUS: Each <List></List> instance is passed a singular title: “Living Musician” and “Living Cat Musician,” respectively. Somehow, each <List></List> counts its list-items and automatically adds an “s” to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.

See if you can figure out how the instances of the List component class are automatically pluralizing their titles!

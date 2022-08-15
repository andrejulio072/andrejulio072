Function Components and Props
Like any component, function components can receive information via props.

To access these props, give your function component a parameter named props. Within the function body, you can access the props using this pattern: props.propertyName. You don’t need to use the this keyword.

export function YesNoQuestion (props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}

ReactDOM.render(
  <YesNoQuestion prompt="Have you eaten an apple today?" />,
  document.getElementById('app');
);
In the above example, we pass a value of “Have you eaten an apple today?” as the prompt prop when rendering YesNoQuestion.

Instructions
1.
Open NewFriend.js.

Rewrite the NewFriend class component as a function component.

Make sure to delete the original NewFriend class when you’re done.

Click Run and make sure that your new friend is still there!


Hint
Make sure to include the export keyword.

Don’t forget to define a props parameter in your new function and access the props using props.src.

Refer to Example.js for more examples.

In this practice session, we are going to add labels and inputs to the form that we created in the last lesson.

1. We've already done a bit of a setup for you by adding some scaffolding code for you. You can start working directly inside the form element.

2. Add the label and the input field for the user's name inside the form element as shown below.
<div>
     <label for="name"> Name</label>
     <input type="text" id="name">
</div>

3. Repeat the same step for the second field, email.
<div>
     <label for="email">Email</label>
     <input type="email" id="email">
</div>


Repeat the same steps and create fields for Age, Date of Birth, Month of Birth, Week of Birth, Favorite Color and Password.

4. The final code should look like this.
<form action="/" method="POST">
    <div>
         <label for="name">Name</label>
         <input type="text" id="name">
    </div>

    <div>
         <label for="email">Email</label>
         <input type="email" id="email">
    </div>

    <div>
         <label for="age">Age</label>
         <input type="number" id="age" min=18 max=60>
    </div>

    <div>
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob">
      </div>

      <div>
           <label for="mob">Month of Birth</label>
           <input type="month" id="mob">
      </div>


      <div>
           <label for="color">Favorite Color</label>
           <input type="color" id="color">
      </div>

      <div>
           <label for="password">Password</label>
           <input type="password" id="password">
      </div>

</form>

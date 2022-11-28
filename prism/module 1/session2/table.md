In this practice session, we are going to practice using the table tags in HTML to create a table on a webpage.

1. We’ve already done a bit of a setup for you by adding some scaffolding code for you. You can start working directly inside the body element.

2. Start by creating a table tag inside the body element. This table will contain 3 columns (Sr.No., Name, Marks) where the last column "Marks" will be sub-divided into 2 columns (Score, Percentage). Add the thead and tbody tags.
<table>
        <thead> </thead>
        <tbody> </tbody>
</table>


3. Next add two rows in the table head as shown below.
<table>
        <thead>
            <tr>
                    <th rowspan="2">Sr. No.</th>
                    <th rowspan="2">Name</th>
                    <th colspan="2">Marks</th>
            </tr>
            <tr>
                       <th>Score</th>
                       <th>Percentage</th>
               </tr>
        </thead>
        <tbody> </tbody>
</table>


4. Finally, add three tr tags, each with td tags, in the tbody tag, one per row.
<tbody>
       <tr>
        <td>0101</td>
        <td>John Doe</td>
        <td>98.01</td>
        <td>98.01 %</td>
       </tr>
       <tr>
         <td>0102</td>
         <td>Mark Handsome</td>
         <td>92.01</td>
         <td>92.01 %</td>
       </tr>
       <tr>
          <td>0103</td>
          <td>Alice Nunch</td>
          <td>97.67</td>
          <td>97.67 %</td>
     </tr>
</tbody>

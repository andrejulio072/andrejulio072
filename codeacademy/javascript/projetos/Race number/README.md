let raceNumber = Math.floor(Math.random() * 1000);
const early = false;
const age = 17;

 if (early && age> 18){
   raceNumber += 1000;
 }

  if (early && age> 18){
   console.log(`Race will begin at 9:30, number: ${raceNumber}`);
 }
 else if(!early && age>18){
   console.log(`Race will begin at 11:00 am, ${raceNumber}`);
   }
else if(age<18){
  console.log(`Race will begin at 12:30 pm, ${raceNumber}`);
}
else{
  console.log("Please approach the registration desk");
}

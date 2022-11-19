function fizzBuzz() {
  let counter=1;
  while (counter <=20){
    if (counter%15==0){
console.log("FizzBuzz");
    }
    else if (counter%3==0){
console.log("Fizz");
    }
    else if (counter%5==0){
      console.log("Buzz");
    }
    else{
      console.log(counter);
    }
    counter+=1;
  }

}
console.log(fizzBuzz());

// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }

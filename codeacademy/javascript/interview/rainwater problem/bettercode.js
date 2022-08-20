// totalWater = 0
// leftPointer = 0
// rightPointer = heights.length - 1
// leftBound = 0
// rightBound = 0

// while leftPointer < rightPointer
//   if the element at leftPointer <= the element at rightPointer
//     if the element is larger than leftBound, set leftBound to the element
//     add the difference between leftBound and the element at leftPointer to totalWater
//     move leftPointer forward by one
//   else
//     if the element is larger than rightBound, set rightBound to the element
//     add the difference between rightBound and the element at rightPointer to totalWater
//     move rightPointer back by one

// return totalWater

function efficientSolution(heights) {
  let total = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]){
        if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer];
      }
      total += leftBound - heights[leftPointer];
      leftPointer++;
    } else {
      if(heights[rightPointer] > rightBound) {
        rightBound = heights[rightPointer];
      }
      total += rightBound - heights[rightPointer];
      rightPointer--;
    }
  }
  return total;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(efficientSolution(testArray));

// Leave this so that we can test your code:
module.exports = efficientSolution;

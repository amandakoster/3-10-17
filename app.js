'use strict';

// Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

function sum(a,b){
  var sumNum = a + b;
  var string = 'The sum of ' + a + ' and ' + b + ' is ' + sumNum + '.';
  return[sumNum,string];
}
sum(4,7);

/////////////////////////////////////
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

function multiply(a,b){
  var prodNum = a * b;
  var string = 'The product of ' + a + ' and ' + b + ' is ' + prodNum + '.';
  return[prodNum,string];
}
multiply(9,5);

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var sum1 = sum(a,b);
  var sum2 = sum(sum1[0],c);
  console.log(sum1);
  console.log(sum2);
  var mult1 = multiply(a,b);
  var mult2 = multiply(mult1[0],c);
  var string1 = a + ' and ' + b + ' and ' + c + ' sum' + ' to ' + sum2[0] + '.';
  console.log(string1);
  var string2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + mult2[0] + '.';
  console.log(string2);
  return[sum2[0],mult2[0], string1, string2];
}
sumAndMultiply(4,7,5);

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4];
function sumArray(testArray){
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var sum1 = sum(a,b);
  var sum2 = sum(sum1[0],c);
  console.log(sum1);
  console.log(sum2);
  var string1 = a + ',' + b + ',' + c + ' was passed in as an array of numbers, and ' + sum2[0] + ' is their sum.';
  return[sum2[0], string1];
}
sumArray(testArray);

testSumArray(testArray);

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4];
function multiplyArray(testArray){
  var testArray = [2,3,4];
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var mult1 = multiply(a,b);
  var mult2 = multiply(mult1[0],c);
  var string1 = 'The numbers ' + a + ',' + b + ',' + c + ' have a product of ' + mult2[0] + '.';
  console.log(mult1);
  console.log(mult2);
  return[mult2[0], string1];
}
multiplyArray(testArray);

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

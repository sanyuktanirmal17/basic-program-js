/***************************************
 * Purpose :  reads 5 Random 2 Digit values ,then 
 * find their sum and the average
 * @author: Sanyukta Nirmal
 * @since 11/7/2021
 ***************************************/

let sum = 0;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 90) + 10;
 sum += number;
}
let average = sum/5;
console.log("The sum of  5 Random 2 Digit values is : "+ sum);
console.log("The average of  5 Random 2 Digit values is : "+ average);
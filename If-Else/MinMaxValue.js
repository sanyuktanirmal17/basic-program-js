/***************************************
 *Purpose:  Write a program that reads 5 Random 3 Digit values and then outputs the minimum 
 * and the maximum value
 * @author: Sanyukta Nirmal 
 * @since: 10/7/2021
 * *************************************/

let max=0;min=999;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 900) + 100;
console.log("number="+number);
 if(number > max) {
     max = number;
 }
 if(number < min) {
     min = number;
 }
}
console.log("minimum value  =  "+min);
console.log("maximum value  =  "+max);
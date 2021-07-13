/***************************************
 * Purpose :  Perform Random Nember 
 * @author: Sanyukta Nirmal
 * @since 11/7/2021
 ***************************************/
let random1 = Math.floor(Math.random() * 10);
console.log("Random Single dig no is:" + random1);
let random2 = Math.floor(Math.random() * 10);
let result = random1 + random2;
console.log("Addition is:" + "random1 and random2 is:" + result);

let Random3 = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Random no between 1-6 is:" + Random3);





//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet = 60 * 40;
let meter = 0.3048;
 let res1 = (feet * 0.3048);
console.log("Meter is:" + res1);

//c. Calculate area of 25 such plots in acres
let acre = (25 * res1)/4046.8;
console.log("area of 25 such plots = "+acre+" acres");
/***************************************
 * Purpose : Unit Conversion
 * @author: Sanyukta Nirmal
 * @since 11/7/2021
 ***************************************/

//a. 1ft = 12 in then 42 in = ? ft
let ft = 12;
res = 42 / ft;
console.log("Feet is:" + res);

//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet = 60 * 40;
let meter = 0.3048;
 let res1 = (feet * 0.3048);
console.log("Meter is:" + res1);

//c. Calculate area of 25 such plots in acres
let acre = (25 * res1)/4046.8;
console.log("area of 25 such plots = "+acre+" acres");
/***************************************
 * Purpose :  Read a Number 1, 10, 100, 1000, etc 
 *  display unit, ten, hundred
 * @author: Sanyukta Nirmal
 * @since 11/7/2021
 ***************************************/
//,...
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value2) {
if(value2 == 1)
console.log("unit");
if(value2 == 10)
console.log("Ten");
if(value2 == 100)
console.log("Hundread");
if(value2== 1000)
console.log("Thousand");
}); 
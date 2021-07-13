/***************************************
 *Purpose: simulate a coin flip and print out "Heads" or "Tails" accordingly.
 * @author: Sanyukta Nirmal 
 * @since: 10/7/2021
 * *************************************/
 
let chance = Math.floor(Math.random() * 10) %2 +1;
if(chance == 1)
console.log("Heads")
else
console.log("Tails")
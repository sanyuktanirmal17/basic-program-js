/**
 * Purpose: Read a Number and Display the week day 
 *  @author: Sanyukta Nirmal
 */

let day = Math.floor(Math.random() * 10) % 7;
//console.log("Day is:" + day);
switch(day){
    case 1:
        Text = "Sunday";
        break;
    case 2:
        Text = "Monday";
        break;
    case 3:
        Text = "tuesday";
        break;    
    case 4:
        Text = "wednsday";
        break;
    case 5:
        Text = "Thursday";
        break;    
    case 6:
        Text = "Friday";
        break;
    case 7:
        Text = "Saturday";
        break;    
}
console.log("The Day is: "  + Text );
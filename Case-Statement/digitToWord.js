/***************************************
 * Purpose :  Read a single digit number 
 *  write the number in word using Case
 * @author: Sanyukta Nirmal
 ***************************************/
let num = Math.floor(Math.random() * 10);
console.log("Random single digit number is:" + num);
switch(num){
    case 0:
        Text = "Zero";
        break;
    case 1:
        Text = "One";
        break;
    case 2:
        Text = "Two";
        break;
    case 3:
        Text = "Three";
        break;    
    case 4:
        Text = "Four";
        break;
    case 5:
        Text = "Five";
        break;    
    case 6:
        Text = "Six";
        break;
    case 7:
        Text = "Seven";
        break;        
    case 8:
        Text = "Eight";
        break;
    case 9:
        Text = "Nine";
        break;    
    }
    console.log("The Digit " + num + " is " + Text + " in word");


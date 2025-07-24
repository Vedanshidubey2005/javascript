let right_no =90;
 const prompt = require("prompt-sync")();
let user_no = prompt("Enter a number :");

while(user_no != right_no){
   user_no = prompt("You have entered a wrong number.Enter a number:");
}

console.log("You have entered a right number.")
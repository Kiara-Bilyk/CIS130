/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Kiara Bilyk
      Date:   10-17-2024

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName("menuItem");
for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal); 
}

// Function to calulate the total cost
function calcTotal()
{
      let orderTotal = 0;
      // Loop to check what boxes are checked and add the price if checked
      for (let n = 0; n < menuItems.length; n++) {
            if (menuItems[n].checked == true){
                  orderTotal += Number(menuItems[n].value);
            }
            
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 } 
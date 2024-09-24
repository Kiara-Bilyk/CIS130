/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Kiara Bilyk
      Date:   09-24-2024

      Filename: project02-04.js
 */
// Prices set as constants
const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07;
//When chicken checkbox is clicked run calcTotal function
document.getElementById("chicken").onclick=calcTotal;
//When halibut checkbox is clicked run calcTotal function
document.getElementById("halibut").onclick=calcTotal;
//When burger checkbox is clicked run calcTotal function
document.getElementById("burger").onclick=calcTotal;
//When salmon checkbox is clicked run calcTotal function
document.getElementById("salmon").onclick=calcTotal;
//When salad checkbox is clicked run calcTotal function
document.getElementById("salad").onclick=calcTotal;
// Function to calulate price, tax, and total cost
function calcTotal(){
   let cost = 0; // Sets cost to 0
   let buyChicken = document.getElementById("chicken").checked; // Sets buyChicken to true or false depending on checkbox named chicken
   let buyHalibut = document.getElementById("halibut").checked; // Sets buyHalibutn to true or false depending on checkbox named halibut
   let buyBurger = document.getElementById("burger").checked; // Sets buyBurger to true or false depending on checkbox named burger
   let buySalmon = document.getElementById("salmon").checked; // Sets buySalmon to true or false depending on checkbox named salmon
   let buySalad = document.getElementById("salad").checked; // Sets buySalad to true or false depending on checkbox named salad
   cost += buyChicken ? CHICKEN_PRICE : 0; // Adds CHICKEN_PRICE to cost if buyChicken is true and adds 0 to cost if false
   cost += buyHalibut ? HALIBUT_PRICE : 0; // Adds HALIBUT_PRICE to cost if buyHalibut is true and adds 0 to cost if false
   cost += buyBurger ? BURGER_PRICE : 0; // Adds BURGER_PRICE to cost if buyBurger is true and adds 0 to cost if false
   cost += buySalmon ? SALMON_PRICE : 0; // Adds SALMON_PRICE to cost if buySalmon is true and adds 0 to cost if false
   cost += buySalad ? SALAD_PRICE : 0; // Adds SALAD_PRICE to cost if buySalad is true and adds 0 to cost if false
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost); // Sets foodTotal 's inner HTML to cost after being formatted
   let tax = cost * SALES_TAX; // Calculates tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax); // Sets foodTax 's inner HTML to tax after being formatted
   let totalCost = cost + tax; // Calculates total cost
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost); // Sets totalBill 's inner HTML to totalCost after being formatted
}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Kiara Bilyk
      Date:   09-23-2024

      Filename: project02-01.js
 */
//function to convert Farenheit to Celsius
function FarenheitToCelsius(degree){
    return (degree - 32)/1.8;
}
//function to convert Celsius to Farenheit
function CelsiusToFahrenheit(degree){
    return (degree * 1.8) + 32;
}
//When tab is pressed the function FarenheitToCelsius() is called then changes the Celsius text to the return
document.getElementById("fValue").onchange=function() {
    var fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
}
//When tab is pressed the function CelsiusToFarenheit() is called then changes the Farenheit text to the return
document.getElementById("cValue").onchange=function() {
    var cDegree = document.getElementById("cValue").value;
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
    } 
/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Kiara Bilyk
      Date:   09-23-2024

      Filename: project02-02.js
 */
//function to verify that something is in all of the text boxes
 function verifyForm(){
    nameVar = document.getElementById("name").value; //Name Variable set to contents of name text box
    emailVar = document.getElementById("email").value; //Email Variable set to contents of email text box
    phoneVar = document.getElementById("phone").value; //Phone Variable set to contents of phone text box
    //Checks if all variables are not empty then returns a message based on result
    nameVar !== "" && emailVar !== "" && phoneVar !== "" ? window.alert("Thank you!"):window.alert("Please fill in all fields");
 }
//Runs verifyForm() function when submit is pressed
document.getElementById("submit").addEventListener("click", verifyForm);

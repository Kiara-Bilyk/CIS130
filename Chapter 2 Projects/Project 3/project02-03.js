/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Kiara Bilyk
      Date:   09-23-2024

      Filename: project02-03.js
 */
//When square is moused over then changes feedback paragraph to display the shape name
document.getElementById("square").onmouseover=function(){
      document.getElementById("feedback").innerHTML="You\'re hovering over the square";
}
//When mouse is removed change feedback paragraph to an empty string
document.getElementById("square").onmouseout=function(){
      document.getElementById("feedback").innerHTML="";
}
//When triangle is moused over then changes feedback paragraph to display the shape name
document.getElementById("triangle").onmouseover=function(){
      document.getElementById("feedback").innerHTML="You\'re hovering over the triangle";
}
//When mouse is removed change feedback paragraph to an empty string
document.getElementById("triangle").onmouseout=function(){
      document.getElementById("feedback").innerHTML="";
}
//When circle is moused over then changes feedback paragraph to display the shape name
document.getElementById("circle").onmouseover=function(){
      document.getElementById("feedback").innerHTML="You\'re hovering over the circle";
}
//When mouse is removed change feedback paragraph to an empty string
document.getElementById("circle").onmouseout=function(){
      document.getElementById("feedback").innerHTML="";
}
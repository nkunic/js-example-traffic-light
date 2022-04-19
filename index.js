// Import stylesheets
import './style.css';

// Write Javascript code!
var circles = document.querySelectorAll('.traffic-light__circle');
console.log(circles);

startTrafficLight();

function startTrafficLight() {
  circles[0].style.background = "red";
  circles[1].style.background = "white";
  circles[2].style.background = "white";

  setTimeout(function() {
    circles[1].style.background = "yellow";
  },2000);

  setTimeout(function() {
    circles[0].style.background = "white";
    circles[1].style.background = "white";
    circles[2].style.background = "green";
  },4000);

  setTimeout(startTrafficLight,6000);

}
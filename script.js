var blog = document.getElementsByClassName('blog');

function horizontal() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('horizontal');
    blog[i].classList.remove('default', 'blogHover');
  }
};
function defaultL() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('default');
    blog[i].classList.remove('blogHover',  'horizontal');
  }
};
function hover() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('blogHover');
    blog[i].classList.remove('default', 'horizontal');
  }
};

var horizontalLayout = document.getElementById('horizontal');
var defaultLayout = document.getElementById('default');
var hoverLayout = document.getElementById('horizontal');
/*
    horizontalLayout.onclick = horizontal();
    defaultLayout.onclick = defaultL();
*/
// for Test
console.log(blog);




/* The clock Funcion */
function clock() {

  var now = new Date();

  var dayName  =  now.getDay(),
      month    =  now.getMonth(),
      dayNum   =  now.getDate(),
      yr       =  now.getFullYear(),
      hour     =  now.getHours(),
      min      =  now.getMinutes(),
      sec      =  now.getSeconds(),
      pe       =  "AM";

  /*
    ? If Condition
    * To transform To 12h
    * To get the Period
  */
  if (hour == 0) {
    hour = 12;
  }
  else if (hour > 12) {
    hour = hour -12;
    pe = "pm";
  }

  var months = ["January", "Feburey", "March", "April", "May", "June", "Jul", "August", "Septemper", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thurusday", "Friday", "Saterday"];
  var values = [week[dayName], months[month], dayNum, yr, hour, min, sec, pe];
  var IDs = ["dayname", "month", "daynum", "year", "hour", "minuts", "seconds", "period"];

  // For Loop
  for (var i=0; i < IDs.length; i++)
  document.getElementById(IDs[i]).firstChild.nodeValue = values[i];
}

/* Repeat The Function */
function repeat() {
  clock();
  window.setInterval("clock();", 1);
}

// * Include HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
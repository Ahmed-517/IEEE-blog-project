var blog = document.getElementsByClassName('blog');

function horizontal() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('horizontal');
    blog[i].classList.remove('default', 'hover');
  }
};
function defaultL() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('default');
    blog[i].classList.remove('hover',  'horizontal');
  }
};
function horizontal() {
  for (var i=0; i < blog.length; i++) {
    blog[i].classList.add('horizontal');
    blog[i].classList.remove('default', 'hover');
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
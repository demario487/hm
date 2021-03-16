

var d = new Date();
document.getElementById("demo").innerHTML = d;
var daysOfWeek = ["Monday", "Tuestday", "wednesday", "Thurstday", "Friday", "Satturday", "Sunday"];

switch(daysOfWeek) {
    case daysOfWeek = daysOfWeek[0] :
        document.getElementById("dayOfWeek").innerHTML = "Monday";
        break;
    case daysOfWeek = daysOfWeek[1] : 
        document.getElementById("dayOfWeek").innerHTML = "Thuestday";
        break;
    default:
        document.getElementById("dayOfWeek").innerHTML = "To,Thuesday u have 2 more day";
}

var date, hours, minutes, seconds, localTime, dayOfWeek, dayOfMonth, month, descrptedDayOfWeek;

date = new Date();
document.getElementById("date").innerHTML = date;
localTime = date.getTime();
dayOfMonth = date.getDate();
month = date.getMonth();
dayOfWeek = date.getDay();

function myClock() {
    date = new Date()
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(myClock, 1000);

document.getElementById("date").innerHTML = dayOfWeek;

switch(dayOfWeek) {
    case dayOfWeek = 0 :
        descrptedDayOfWeek = "Sunday";
        break;
    case dayOfWeek = 1 : 
        descrptedDayOfWeek = " Monday";
        break;
    case dayOfWeek = 2 : 
        descrptedDayOfWeek = " Tuestday";
        break;
    case dayOfWeek = 3 : 
        descrptedDayOfWeek = " Wednesday";
        break;
    case dayOfWeek = 4 : 
        descrptedDayOfWeek = " Thurstday";
        break;
    case dayOfWeek = 5 : 
        descrptedDayOfWeek = " Friday";
        break;
    case dayOfWeek = 6 : 
        descrptedDayOfWeek = " Satturday";
        break;
    default:
        descrptedDayOfWeek = "There is no such day"
}
document.getElementById("date").innerHTML = descrptedDayOfWeek;
var a = "Hello, this is my world."
var b = "There are many rocks here"

document.getElementById("demo1").innerHTML =a+b;

var str = "I am learning Javascript. Before I learned HTML, but Javascript is hardere !";
var pos = str.indexOf("Javascript");
document.getElementById("demo2").innerHTML = pos;

var str = "I am learning Javascript. Before I learned HTML, but Javascript is hardere !";
var pos = str.lastIndexOf("Javascript");
document.getElementById("demo3").innerHTML = pos;


function myFunction() {
    var str = document.getElementById("demo4").innerHTML; 
    var txt = str.replace("Hello I am at the office*999","Hello_I_am_at_the_office_999");
    document.getElementById("demo4").innerHTML = txt;
  }
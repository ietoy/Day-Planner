// The top of the calendar will display

    // the current day, and time if I can swing it
var currentDay = document.querySelector("#currentDay");


// below is an example copied from stack overflow. Take what you need from here and port it over to the index.html as necessary
var stackOverflowTemp = document.querySelector("#stackOverflowTemp");

var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours());
    
var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;

// document.getElementsByTagName('h1')[0].textContent = today;

currentDay.textContent = today;

// below is what I need to glean from the above StackOverflow Example
var weekdayArr;
weekdayArr = ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var monthsArr;
monthsArr = ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');




// display standard business hours from 9am to 5pm

// each time slot should represent one hour and contain

    // the time, on the far left

    // a field to hold user imput
    
        // this background will change based on the time of day,
        
        // indicating wether or not this time has passed
        
        // use this to indicate also if the event is current or upcoming.
        
        // also change based on wheter the hour is free or filled.
        
        // use the Moment.js library for this, read docs carefully
    
    // a save button to the right of each time slot
    
        // clicking on this save button saves the user input to localStorage


function saveEvent() {

}



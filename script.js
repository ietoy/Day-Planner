// The top of the calendar will display

    // the current day, and time if I can swing it
var currentDay = document.querySelector("#currentDay");

var eventSpaceEl = document.querySelector("#eventSpace");

var todayInfo = new Date();
var weekdayArr;
weekdayArr = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var monthsArr;
monthsArr = new Array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var doWeek;
doWeek = weekdayArr[todayInfo.getDay()]
var dd;
dd = todayInfo.getDate();
var mm;
mm = monthsArr[todayInfo.getMonth()];

currentDay.textContent = doWeek + ", " + mm + " " + dd ;

// display standard business hours from 9am to 5pm
// to do this, I think i need to add a table element to the div with the class container
var timeSlots;
timeSlots = document.querySelector(".container");




// var testElement;
// testElement = $(<p></p>).text("This is a test of jQuery functions.");

// $(".container").append(testElement);

// $("<h1>").appendTo(".container");
// $(".container").add("<p>").addClass("eventWindow");
// $(".eventWindow").text("howdy-ho, kids!")

// each time slot should represent one hour and contain

    // the time, on the far left

    // a field to hold user imput
    
    // The field to enter text will only appear when the user clicks on the space under "event"
    // when the user presses save, it will store that input.value to that cell in the table
    // HELP HELP HELP HELP HELP HELP HELP HELP HELP MEOW MEOW MEOW MEOW MEOW MEOW MEOW
    $("#eventSpace").on("click", function() {
      eventSpaceEl.remove(".d-none");
    });

    
        // this background will change based on the time of day,
        
        // indicating wether or not this time has passed
        
        // use this to indicate also if the event is current or upcoming.
        
        // also change based on wheter the hour is free or filled.
        
        // use the Moment.js library for this, read docs carefully
    
    // a save button to the right of each time slot
    
        // clicking on this save button saves the user input to localStorage


function saveEvent() {

}



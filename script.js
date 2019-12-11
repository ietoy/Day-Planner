// This displays the current date by getting the day of the week, the month, and the date of the month from the the window object
var currentDay = document.querySelector("#currentDay");
var eventSpaceEl = document.querySelector("#eventSpace");

var todayInfo = new Date();
var weekdayArr;
weekdayArr = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var monthsArr;
monthsArr = new Array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var doWeek = weekdayArr[todayInfo.getDay()];
var dd = todayInfo.getDate();
var mm = monthsArr[todayInfo.getMonth()];

currentDay.textContent = doWeek + ", " + mm + " " + dd ;
// END DATE DISPLAY


// TIMESLOT GENERATOR
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// Globally Defined Variables 
var timeSlot;
var hour;
var eventItem;
var eventInput;
var saveBtn;

function renderTimeSlots() {
  for (var i = 0; i < times.length; i++) {
    // var timeSlot;
    timeSlot = $("<tr>");
    timeSlot.addClass("row");
    timeSlot.attr("data-hour", times[i]);
    $(".table").append(timeSlot);
      // var hour;
      hour = $("<td>");
      hour.addClass("col-2");
      hour.text(times[i]);
    timeSlot.append(hour);
      // var eventItem;
      eventItem = $("<td>");
      eventItem.addClass("col-9");
      eventItem.addClass("input");
      eventItem.attr("id", times[i]);
      eventItem.text("");
        //   var eventInput;
        eventInput = $("<textarea>");
        eventInput.addClass("w-100");
        eventInput.addClass("input");
        // eventInput.addClass("d-none");
      eventItem.append(eventInput);

    timeSlot.append(eventItem);
      // var saveBtn;
      saveBtn = $("<button>");
      saveBtn.addClass("saveBtn");
      saveBtn.addClass("col-1");
      saveBtn.text("SAVE")
    timeSlot.append(saveBtn);
  };
};

function buildTable() {
  var schedule;
  schedule = $("<table>");
  schedule.addClass("table")
  $("#time-slots").append(schedule);
  var tableHeaders;
  tableHeaders = $("<tr>");
  tableHeaders.addClass("row");
  schedule.append(tableHeaders);
  var toDay;
  toDay = $("<th>");
  toDay.addClass("col-2");
  toDay.text("Time of Day");
  tableHeaders.append(toDay);
  var eventHead;
  eventHead = $("<th>");
  eventHead.addClass("col-10");
  eventHead.text("Scheduled Event");
  tableHeaders.append(eventHead);
  renderTimeSlots();
};

buildTable();
// END TIMESLOT GENERATOR

    // The field to enter text will only appear when the user clicks on the space under "event"
    // when the user presses save, it will store that input.value to that cell in the table
    // HELP HELP HELP HELP HELP HELP HELP HELP HELP MEOW MEOW MEOW MEOW MEOW MEOW MEOW
    
        // this background will change based on the time of day,
        
        // indicating wether or not this time has passed
        
        // use this to indicate also if the event is current or upcoming.
        
        // also change based on wheter the hour is free or filled.
        
        // use the Moment.js library for this, read docs carefully
    
    // a save button to the right of each time slot
    
        // clicking on this save button saves the user input to localStorage

function saveEvent() {
  
};


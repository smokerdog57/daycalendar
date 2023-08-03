// build a calendar using js, jquery, dayjs and bootstrap as appropriate

// Global Variables
var startHr = 9;   // set the starting hour for the calendar
var dayHrs = 8;    // number of hours on calendar
var clockHrArray = []; // declare the array to store the start hour through the last hour
var i = 0; // initialize the index
var currentHrInteger = parseInt(dayjs().format('H')); // get current time in format hAM
var timeString;

// ensure html is fully loaded before java script takes effect
$(document).ready(function () {
  // Function to generate the calendar rows
  function buildCalendarRow(hour) {
    var row = $('<div>').attr('id', 'hour-' + hour).addClass('row time-block');
    var timeColumn = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hour);
    var descriptionColumn = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
    var saveBtnColumn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

    saveBtnColumn.append(saveIcon);
    row.append(timeColumn, descriptionColumn, saveBtnColumn);
    $('.container-lg.px-5').append(row);
  }

  // Build the calendar from 9AM to 5PM
  for (var index = startHr; index <= startHr + dayHrs; index++) {
    var clockHr = dayjs().hour(index); // clockHr = 9AM through 5 PM
    var formattedHr = clockHr.format('hA'); // convert to 12-hour AM/PM format
    clockHrArray.push(formattedHr); // add to the array
    buildCalendarRow(formattedHr);
  }

   // convert timeString to 24 hour time integer
  function convertTimeStringTo24Hr(timeString) {
    var amPM = timeString.substr(-2);
    var converted24HrTimeInteger = parseInt(timeString.replace(/^(\d+).*$/, "$1"));
    if (amPM === "PM" && converted24HrTimeInteger != 12) {
      converted24HrTimeInteger += 12; // convert to 24 hour
    }
    console.log(`the input time is ${timeString} AM/PM is ${amPM} output time is ${converted24HrTimeInteger}`);
    return converted24HrTimeInteger;
  }

  // color code the calendar
  $('.time-block').each(function () {
    var convertedCalendarHr = convertTimeStringTo24Hr(clockHrArray[i]);
    console.log(`index: is ${i} current hour: ${currentHrInteger} cal: ${convertedCalendarHr}`);
    if (convertedCalendarHr < currentHrInteger) {
      $(this).addClass('past');
    } else if (convertedCalendarHr === currentHrInteger) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    i++;
  });
});








   //$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
//   });
// });
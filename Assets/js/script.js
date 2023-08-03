// build a calendar using js, jquery, dayjs and bootstrap as appropriate

//This code should use the id in the containing time-block as a key to save 
// the user input in local storage. 
//    HINT: What does `this` reference in the click listener
//    function? How can DOM traversal be used to get the "hour-x" id of the
//    time-block containing the button that was clicked? How might the id be
//    useful when saving the description in local storage?
//
// Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this

// Global Variables
var startHr = 9;   // set the starting hour for the calendar
var dayHrs = 8;    // number of hours on calendar
var clockHrArray = []; // declare the array to store the start hour through the last hour
var i = 0; // initialize the index
currentTime = dayjs().format('dddd D-MMM-YYYY');
var currentHrInteger = parseInt(dayjs().format('H')); // get current time in integer hour format
var timeString;
var inputText = "Placeholder";

// ensure html is fully loaded before java script takes effect
$(document).ready(function () {

  var containerEl = $(".container-lg");  // jQuery selector for the container
  var clickedRowEl;

  // code to display the current date in the header of the page.
  $('#currentDay').text(currentTime);

  // Build and color code the calendar
  for (var index = startHr; index <= startHr + dayHrs; index++) {
    var clockHr = dayjs().hour(index); // clockHr = 9AM through 5 PM
    var formattedHr = clockHr.format('hA'); // convert to 12-hour AM/PM format
    clockHrArray.push(formattedHr); // add to the array

    // var row = $('<div>').attr('id', index + '-hou').addClass('row time-block');
    var row = $('<div>').attr('id', index + '-hou').addClass('row time-block');
    var timeColumn = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(formattedHr);
    var descriptionColumn = $('<textarea>').attr('id', index + '-inp').addClass('col-8 col-md-10 description').attr('rows', '3');
    var saveBtnColumn = $('<button>').attr('id', index + '-btn').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    var saveIcon = $('<i>').attr('id', index + '-ico').addClass('fas fa-save').attr('aria-hidden', 'true');

    // color code the calendar row
    var convertedCalendarHr = convertTimeStringTo24Hr(clockHrArray[i]);
    // console.log(`index: is ${i} current hour: ${currentHrInteger} cal: ${convertedCalendarHr}`);
    if (convertedCalendarHr < currentHrInteger) {
      row.addClass('past');
    } else if (convertedCalendarHr === currentHrInteger) {
      row.addClass('present');
    } else {
      row.addClass('future');
    }
    i++ // increment the array index

    saveBtnColumn.append(saveIcon);
    row.append(timeColumn, descriptionColumn, saveBtnColumn);
    $('.container-lg.px-5').append(row);
  }

  // utility function to convert timeString to 24 hour time integer
  function convertTimeStringTo24Hr(timeString) {
    var amPM = timeString.substr(-2);
    var converted24HrTimeInteger = parseInt(timeString.replace(/^(\d+).*$/, "$1"));
    if (amPM === "PM" && converted24HrTimeInteger != 12) {
      converted24HrTimeInteger += 12; // add 12 hours if time = 1PM to 11PM
    }
    // console.log(`the input time is ${timeString} AM/PM is ${amPM} output time is ${converted24HrTimeInteger}`);
    return converted24HrTimeInteger;
  }

  //$(function () {
  // Add a listener for click events on the save button. 
  $('.container-lg').on("click", "button, i", function (event) {
    console.log("the button was clicked")
    var tagName = event.target.tagName
    var buttonId = event.target.id; // get clicked button id
    console.log(`buttonId is ${buttonId}`);
    rowHour = parseInt(buttonId.substr(0, buttonId.length - 4)); // get the hour of the row
    rowIndex = rowHour - 9;  // returns an integer between 0 and 8 since there are 9 rows
    var textAreaId = rowHour + '-inp'
    console.log(textAreaId);
    // var containerElement = $('.container-lg'); // Replace with the appropriate container selector
    var textAreaEl = containerEl.find('#' + textAreaId);  
    inputText = textAreaEl.val();
    localStorage.setItem(textAreaId, inputText);
    console.log("User input saved to localStorage:", inputText)
  });

  // Retrieve and set user input from localStorage when the page loads
  for (var index = startHr; index <= startHr + dayHrs; index++) {
    var localStorageKey = index + '-inp';
    var inputValue = localStorage.getItem(localStorageKey);
    if (inputValue) {
      $('#' + localStorageKey).val(inputValue);
    }
  }
});

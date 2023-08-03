# 05 Third-Party APIs: Work Day Scheduler

#### Coder: Tom Fusco 3-Aug-2023
#### 05 Third-Party APIs: Work Day Scheduler

<img src="Assets/mockup/05-third-party-apis-homework-demo.gif" width=50%>

#### Link to Deployed Application:  https://smokerdog57.github.io/daycalendar/
#### Link to GitHub repository:     https://github.com/smokerdog57/daycalendar/

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
## Application Requirements 

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Design Description

The application has two main functions:  

  * buildCalendar(): builds the calendar and colors the background for each row as a function of:
    - in the past:  grey
    - current hour: red
    - future:       green

  * getLocalStorage(): retrieves local storageand writes to middle column which is the text input 
  column for recording meetings, appointments and events etc.

In addition there is a utility function (convertTimeStringTo24Hr) which converts the calendar hour to 2-digit 24 hour clock. This function is called by buildCalendar() to determine the row background color(past,present,future).

There is one event listener which is triggered from save button click and the associated anonymous function figures out which button was pushed and writes the associated new text to local storage.

## Mock-Up

The following animation demonstrates the application functionality:

<img src="Assets/mockup/05-third-party-apis-homework-demo.gif" width=75%>

## Build, Installation and Deployment

 * Application built using MS Visual Studio.
 * Application was commited and pushed to GitHub repository "codequiz" main branch.
 * Used GitHub "pages" to deploy application.

## Quality

* Application resembles mock-up.
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains quality README file with description, screenshot, and link to deployed application.

## Technologies used

 * HTML
 * CSS
 * Javascript
 * Web Api(s)
    - jQuery
    - dayjs
    - bootstrap

## Credits

 * Tutoring session with Sandy
 * Consultation with my peer students
 * Slack resource channel

## License

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
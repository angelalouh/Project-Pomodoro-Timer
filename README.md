# Pomodoro Timer
The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. 
Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.

For this project, I implemented a Pomodoro timer that followed these steps (simplified from the original technique):

1. Set the focus duration (default to 25 minutes, no less than 5 or more than 60).
2. Set the break duration (default to 5 minutes, no less than 1 or more than 15).
3. When the user clicks the "play" button, the timer starts.
4. When the focus time expires, an alarm plays and then the break timer starts.
5. When the break time expires, the alarm plays again and then the focus timer starts.

## Screenshots
### Initial Screen:
![initial screen](/screenshots/starting-screen.jpg)
The initial screen lets the user set the length of the focus and break sessions.

The "stop" button is disabled on the initial screen because the user has not started the timer yet.

When the user clicks the "play" button, the timer will always start a new focus session.

### Active Session Screen:
![active session screen](/screenshots/active-session.jpg)
After the user clicks the "play" button, the buttons to change the focus and break durations are disabled and the session timer appears.

The session timer shows the type of session, either "Focusing" or "On Break," the total duration of the session, the time remaining, and a progress bar to indicate how much of the current session is complete.

### Paused Session Screen:
![paused session screen](/screenshots/paused-session.jpg)
If the user clicks on the "pause" button, "PAUSED" appears below the time remaining and the pause button will now be a play button.

Of note, stopping a session will always return the application to the initial screen and the user will be able to change the focus and break durations.

## Technology
### Built with:
- React, JavaScript, HTML, Bootstrap 4 for styling, and Open-Iconic icons for icons.

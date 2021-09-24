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



## Technology
### Built with:
- React, JavaScript, HTML, Bootstrap 4 for styling, and Open-Iconic icons for icons.

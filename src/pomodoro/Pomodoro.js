import React, { useState } from "react";
import useInterval from "../utils/useInterval";

import DurationButtons from "./DurationButtons";
import PlayPauseButtons from "./PlayPauseButtons";
import StopButton from "./StopButton";
import ProgressText from "./ProgressText";
import ProgressBar from "./ProgressBar";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState, focusDuration, breakDuration) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  if (prevState.label === "Focusing") {
    const timeElapsed = focusDuration * 60 - timeRemaining;
    prevState.percentComplete = (timeElapsed / (focusDuration * 60)) * 100;
  } else {
    const timeElapsed = breakDuration * 60 - timeRemaining;
    prevState.percentComplete = (timeElapsed / (breakDuration * 60)) * 100;
  }
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        duration: breakDuration,
        timeRemaining: breakDuration * 60,
        percentComplete: 0,
      };
    }
    return {
      label: "Focusing",
      duration: focusDuration,
      timeRemaining: focusDuration * 60,
      percentComplete: 0,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Initial session state:
  const initialSessionState = {
    label: null,
    duration: null,
    timeRemaining: null,
    percentComplete: null,
  };

  // Declaring the single-state session variable
  const [session, setSession] = useState(initialSessionState);

  // The initial Focus Duration timer starts at 25 minutes
  const [focusDuration, setFocusDuration] = useState(25);

  // The initil Break Duration timer starts at 5 minutes
  const [breakDuration, setBreakDuration] = useState(5);

  // Disable state for focusDuration buttons
  const [disableDurationButtons, setDisableDurationButtons] = useState(false);

  // The disabled state of the stop button
  const [disableStopButton, setDisableStopButton] = useState(true);

  // Declaring state variable that will be used to hide the progress text and bar
  const [activeSessionStyle, setActiveSessionStyle] = useState(null);

  // PAUSED text appears after pressing the pause button
  const [paused, setPaused] = useState("none");

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }

      return setSession(nextTick(session, focusDuration, breakDuration));
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <DurationButtons
        focusDuration={focusDuration}
        setFocusDuration={setFocusDuration}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
        disableDurationButtons={disableDurationButtons}
      />
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mt-5 mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <PlayPauseButtons
              setDisableDurationButtons={setDisableDurationButtons}
              setDisableStopButton={setDisableStopButton}
              setActiveSessionStyle={setActiveSessionStyle}
              setIsTimerRunning={setIsTimerRunning}
              isTimerRunning={isTimerRunning}
              setPaused={setPaused}
              setSession={setSession}
              focusDuration={focusDuration}
            />
            <StopButton
              setIsTimerRunning={setIsTimerRunning}
              setSession={setSession}
              initialSessionState={initialSessionState}
              setFocusDuration={setFocusDuration}
              setBreakDuration={setBreakDuration}
              setDisableDurationButtons={setDisableDurationButtons}
              setDisableStopButton={setDisableStopButton}
              setActiveSessionStyle={setActiveSessionStyle}
              setPaused={setPaused}
              disableStopButton={disableStopButton}
            />
          </div>
        </div>
      </div>
      <div>
        <ProgressText
          activeSessionStyle={activeSessionStyle}
          session={session}
          paused={paused}
        />
        <ProgressBar
          activeSessionStyle={activeSessionStyle}
          session={session}
        />
      </div>
    </div>
  );
}

export default Pomodoro;

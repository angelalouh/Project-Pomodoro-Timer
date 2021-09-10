import React from "react";
import classNames from "../utils/class-names";

function PlayPauseButtons({
  setDisableDurationButtons,
  setDisableStopButton,
  setActiveSessionStyle,
  setIsTimerRunning,
  setPaused,
  setSession,
  focusDuration,
  isTimerRunning,
}) {

  function playPause() {
    // Disable FocusDuration buttons upon pressing play
    setDisableDurationButtons(true);
    // Enable the stop button upon pressing play
    setDisableStopButton(false);
    // Display active session div upon pressing play
    setActiveSessionStyle("block");

    setIsTimerRunning((prevState) => {
      // displaying the PAUSED text when the pause button has been pressed
      if (prevState) {
        setPaused("block");
      } else {
        setPaused("none");
      }

      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession.label === null) {
            return {
              label: "Focusing",
              duration: focusDuration,
              timeRemaining: focusDuration * 60,
              percentComplete: 0,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="play-pause"
      title="Start or pause timer"
      onClick={playPause}
    >
      <span
        className={classNames({
          oi: true,
          "oi-media-play": !isTimerRunning,
          "oi-media-pause": isTimerRunning,
        })}
      />
    </button>
  );
}

export default PlayPauseButtons;

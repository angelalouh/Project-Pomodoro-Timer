import React from "react";

// Implementing the Stop Button to allow stopping the current focus or break session
function StopButton({
  setIsTimerRunning,
  setSession,
  initialSessionState,
  setFocusDuration,
  setBreakDuration,
  setDisableDurationButtons,
  setDisableStopButton,
  setActiveSessionStyle,
  setPaused,
  disableStopButton,
}) {
  const handleStopButtonClick = () => {
    setIsTimerRunning(false);

    // Reverting the session back to its initial state
    setSession(initialSessionState);

    // Resetting the Focus Duration and Break Duration to default values
    setFocusDuration(25);
    setBreakDuration(5);

    // Allow user to adjust the duration buttons again
    setDisableDurationButtons(false);

    // Disabling the stop button when there is no active session
    setDisableStopButton(true);

    // Prevent rendering of the progress text and progress bar
    setActiveSessionStyle(null);

    // Prevent rendering of the PAUSED text
    setPaused("none");
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      onClick={handleStopButtonClick}
      disabled={disableStopButton}
    >
      <span className="oi oi-media-stop pt-1" />
    </button>
  );
}

export default StopButton;

import React from "react";
import { minutesToDuration } from "../utils/duration";

function DurationButtons({
  focusDuration,
  breakDuration,
  setFocusDuration,
  setBreakDuration,
  disableDurationButtons,
}) {
  // Functions to handle decreasing the focus or break duration time:
  const handleMinusFocusDurationClick = () => {
    setFocusDuration((currentFocusDuration) => {
      return Math.max(5, currentFocusDuration - 5);
    });
  };

  const handleMinusBreakDurationClick = () => {
    setBreakDuration((currentBreakDuration) => {
      return Math.max(1, currentBreakDuration - 1);
    });
  };

  // Functions to handle increasing the focus or break duration time:
  const handlePlusFocusDurationClick = () => {
    setFocusDuration((currentFocusDuration) => {
      return Math.min(60, currentFocusDuration + 5);
    });
  };

  const handlePlusBreakDurationClick = () => {
    setBreakDuration((currentBreakDuration) => {
      return Math.min(15, currentBreakDuration + 1);
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* Updating this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* Allows user to decrease the focus duration, and disables this button during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleMinusFocusDurationClick}
              disabled={disableDurationButtons}
            >
              <span className="oi oi-minus mt-1" />
            </button>
            {/* Allows user to increase the focus duration, and disables this button during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handlePlusFocusDurationClick}
              disabled={disableDurationButtons}
            >
              <span className="oi oi-plus mt-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* Updating this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* Allows user to decrease the break duration, and disables this button during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleMinusBreakDurationClick}
                disabled={disableDurationButtons}
              >
                <span className="oi oi-minus mt-1" />
              </button>
              {/* Allows user to increase the break duration, and disables this button during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handlePlusBreakDurationClick}
                disabled={disableDurationButtons}
              >
                <span className="oi oi-plus mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DurationButtons;

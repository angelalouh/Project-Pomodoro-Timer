import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function ProgressText({ activeSessionStyle, session, paused }) {
  return (
    <>
      {/* This area will only show when there is an active focus or break - i.e. session is running or paused */}
      {activeSessionStyle === "block" && (
        <div className="row mb-2">
          <div className="col">
            {/* Message below appropriately shows the current session (Focus or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(session.duration)} minutes
            </h2>
            {/* Message below approriately shows the correct format of the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
            {/* PAUSED message will display when the pause button is clicked on */}
            <h2 style={{ display: paused }}>PAUSED</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgressText;

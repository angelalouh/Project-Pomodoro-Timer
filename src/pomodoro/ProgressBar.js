import React from "react";

function ProgressBar({ activeSessionStyle, session }) {
  return (
    <>
      {activeSessionStyle === "block" && (
        // This area will only show when there is an active focus or break - i.e. session is running or is paused
        <div className="row mt-2 mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                // Increasing aria-valuenow as time elapses
                aria-valuenow={session.percentComplete}
                // Increasing width % as time elapses
                style={{ width: `${session.percentComplete}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgressBar;

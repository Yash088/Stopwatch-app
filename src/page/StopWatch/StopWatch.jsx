import React, { Fragment } from "react";
import ResetButton from "../../components/ResetButton";
import StartPauseButton from "../../components/StartPauseButton";
import StopButton from "../../components/StopButton";

import useStopwatch from "./useStopwatch";
import "./stopwatch.css";

const Stopwatch = () => {
  const {
    hours,
    minutes,
    seconds,
    finalTime,
    isRunning,
    handleStartPause,
    handleStop,
    handleReset,
  } = useStopwatch();
  return (
    <div className="stopwatch-container">
      <div className="time-display">
        {finalTime !== null ? (
          `Lap Time: ${finalTime}s`
        ) : (
          <Fragment>
            <span className="time-part">{hours}</span>
            <span className="timer-pointer">h</span>
            <span className="time-separator">:</span>
            <span className="time-part">{minutes}</span>
            <span className="timer-pointer">m</span>
            <span className="time-separator">:</span>
            <span className="time-part">{seconds}</span>
            <span className="timer-pointer">s</span>
          </Fragment>
        )}
      </div>
      <div className="buttons-container">
        <StartPauseButton
          isRunning={isRunning}
          onStartPause={handleStartPause}
        />
        <StopButton onStop={handleStop} isRunning={isRunning} />
        <ResetButton
          onReset={handleReset}
          disabled={!isRunning && finalTime === null}
        />
      </div>
    </div>
  );
};

export default Stopwatch;

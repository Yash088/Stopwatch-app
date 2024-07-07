import React, { Fragment } from "react";
import useStopwatch from "./useStopwatch";
import "./stopwatch.css";
import Button from "../../common/Button/Button";

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
        <Button onClick={handleStartPause}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button disabled={!isRunning && seconds == 0} onClick={handleStop}>
          Stop
        </Button>
        <Button
          onClick={handleReset}
          disabled={(!isRunning && seconds == 0) && finalTime === null}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;

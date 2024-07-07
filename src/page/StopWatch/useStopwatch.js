import { useState, useEffect, useCallback } from "react";

const useStopwatch = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [finalTime, setFinalTime] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  }, [isRunning, intervalId]);

  const handleStop = useCallback(() => {
    clearInterval(intervalId);
    setIsRunning(false);
    setFinalTime(totalSeconds); // set the final time before resetting
    setTotalSeconds(0);
  }, [intervalId, totalSeconds]);

  const handleReset = useCallback(() => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTotalSeconds(0);
    setFinalTime(null); // clear the final time
  }, [intervalId]);

  const formatTimePart = (timePart) => {
    return timePart < 10 ? `0${timePart}` : timePart.toString();
  };

  return {
    hours: formatTimePart(Math.floor(totalSeconds / 3600)),
    minutes: formatTimePart(Math.floor((totalSeconds % 3600) / 60)),
    seconds: formatTimePart(totalSeconds % 60),
    finalTime,
    isRunning,
    handleStartPause,
    handleStop,
    handleReset,
  };
};

export default useStopwatch;

import React from 'react';

const StopButton = ({ onStop, isRunning }) => {
  return (
    <button onClick={onStop} disabled={!isRunning}>
      Stop
    </button>
  );
};

export default StopButton;

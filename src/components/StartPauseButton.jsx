import React from 'react';

const StartPauseButton = ({ isRunning, onStartPause }) => {
  return (
    <button onClick={onStartPause}>
      {isRunning ? 'Pause' : 'Start'}
    </button>
  );
};

export default StartPauseButton;

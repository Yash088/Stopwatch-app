import React from "react";

const ResetButton = ({ onReset,disabled  }) => {
  return (
    <button onClick={onReset} disabled={disabled}>
      Reset
    </button>
  );
};

export default ResetButton;

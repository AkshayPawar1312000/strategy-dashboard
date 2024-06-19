import React from 'react';
import './ToggleSwitch.css';

// The ToggleSwitch component allows users to switch between different market views (Bullish, Bearish, RangeBound, Volatile) by clicking on buttons.
const ToggleSwitch = ({ view, setView }) => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className="toggle-switch">
      {views.map((v) => (
        <button
          key={v}
          className={`toggle-button ${view === v ? 'selected' : ''}`}
          onClick={() => setView(v)}
        >
          {v}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;

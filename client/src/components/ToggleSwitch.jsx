
import React from 'react';
import './ToggleSwitch.css';

// ToggleSwitch component to show a custom ON/OFF switch
const ToggleSwitch = ({ checked, onChange }) => {
  return (
    // Label acts as the clickable container for the switch
    <label className="switch">
      {/* Checkbox input represents the toggle state (checked or unchecked) */}
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
      />
      
      {/* The slider part that moves when toggled */}
      <div className="slider">
        {/* Text inside the slider, styled differently if switch is active */}
        <div className={`switch-text ${checked ? 'active' : ''}`}>
          Super<br />Saver
        </div>
      </div>
    </label>
  );
};


export default ToggleSwitch;

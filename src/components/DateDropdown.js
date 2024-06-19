import React from 'react';
import './DateDropdown.css';

//The DateDropdown component allows users to select a date from a dropdown menu, updating the selected date state when a new date is chosen.
const DateDropdown = ({ dateArray, selectedDate, setSelectedDate }) => {
  return (
    <select
      className="date-dropdown"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    >
      {dateArray.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
};

export default DateDropdown;

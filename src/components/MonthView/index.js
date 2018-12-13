import React from 'react';

import './MonthView.css';

const WEEK_DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

const MonthView = () => (
  <div className="month-container">
    { WEEK_DAYS.map((day) => (
      <div key={ day } className="month-item month-header">{ day }</div>
    ))}
    { new Array(31).fill('').map((value, index) => <div key={ index } className="month-item">{ index + 1 }</div>)}
  </div>
);

export default MonthView;

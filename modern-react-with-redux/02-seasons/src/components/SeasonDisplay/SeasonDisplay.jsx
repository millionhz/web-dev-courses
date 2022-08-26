import React from 'react';
import './SeasonDisplay.css';

function getSeason(latitude, month) {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude < 0 ? 'summer' : 'winter';
  }
}

const config = {
  summer: {
    text: 'Lets hit the beach.',
    icon: 'sun',
  },
  winter: {
    text: 'Brr, Its Chilly!',
    icon: 'snowflake',
  },
};

function SeasonDisplay(props) {
  const season = getSeason(props.latitude, props.month);
  const { text, icon: iconName } = config[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`}></i>
      <h1 className="season-msg">{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
}

export default SeasonDisplay;

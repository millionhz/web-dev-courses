import React, { useState } from 'react';

function Dropdown({ title, options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);

  function renderSelections() {
    return options.map(({ label, value }, idx) => {
      if (idx === selected) {
        return null;
      }

      return (
        <div
          key={value}
          className="item"
          onClick={() => {
            onSelectedChange(idx);
          }}
        >
          {label}
        </div>
      );
    });
  }

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{title}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen((prevIsOpen) => !prevIsOpen)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{options[selected].label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderSelections()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

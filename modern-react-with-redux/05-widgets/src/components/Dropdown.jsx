import React, { useEffect, useState, useRef } from 'react';

function Dropdown({ label, options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
    <div
      ref={ref}
      className="ui form"
      onClick={() => setOpen((prevOpen) => !prevOpen)}
    >
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{options[selected]?.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderSelections()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

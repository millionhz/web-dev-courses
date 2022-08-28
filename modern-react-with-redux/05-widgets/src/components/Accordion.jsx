import React, { useState } from 'react';

function Accordion({ list }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function onTitleClick(idx) {
    setActiveIndex((prevActiveIndex) => {
      if (prevActiveIndex === idx) {
        return -1;
      }
      return idx;
    });
  }

  function isActive(idx) {
    return idx === activeIndex ? 'active' : '';
  }

  return (
    <div className="ui styled accordion">
      {list.map((item, idx) => (
        <React.Fragment key={idx}>
          <div
            className={`${isActive(idx)} title`}
            onClick={() => onTitleClick(idx)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`${isActive(idx)} content`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Accordion;

import React, { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  function incrementVal() {
    setValue((prevVal) => prevVal + 1);
  }

  function decrementVal() {
    setValue((prevVal) => prevVal - 1);
  }

  return (
    <div className="App">
      <h1>Value: {value}</h1>
      <button type="button" onClick={incrementVal}>
        Increment
      </button>
      <button type="button" onClick={decrementVal}>
        Decrement
      </button>
    </div>
  );
}

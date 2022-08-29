import React from 'react';

function TextInput({ value, onChange }) {
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Enter Text</label>
        <input type="text" value={value} onChange={onChange}></input>
      </div>
    </div>
  );
}

export default TextInput;

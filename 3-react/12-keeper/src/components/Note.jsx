import React from 'react';

export default function Note(props) {
  return (
    <div data-key={props.idx} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={(e) => {
          props.onButtonClick(parseInt(e.target.parentNode.dataset.key));
        }}
      >
        DELETE
      </button>
    </div>
  );
}

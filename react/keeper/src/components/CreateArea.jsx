import React from 'react';

function CreateArea(props) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const title = e.target.elements.title.value;
          const content = e.target.elements.content.value;
          props.onButtonClick(title, content);

          e.target.reset();
        }}
      >
        <input name='title' placeholder='Title' />
        <textarea name='content' placeholder='Take a note...' rows='3' />
        <button type='submit'>+</button>
      </form>
    </div>
  );
}

export default CreateArea;

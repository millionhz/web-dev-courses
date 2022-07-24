import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import defaultNotes from '../utility/notes';
import CreateArea from './CreateArea';

export default function App() {
  const [notes, setNotes] = useState(defaultNotes);

  function deleteNote(key) {
    setNotes((prevNotes) => prevNotes.filter((val) => val.key !== key));
  }

  function addNote(title, content) {
    const newNote = {
      key: Math.round(Math.random() * 10000),
      title,
      content,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div>
      <Header />
      <CreateArea onButtonClick={addNote} />
      {notes.map((note) => (
        <Note
          key={note.key}
          idx={note.key}
          title={note.title}
          content={note.content}
          onButtonClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

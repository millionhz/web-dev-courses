import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../utility/notes';

export default function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

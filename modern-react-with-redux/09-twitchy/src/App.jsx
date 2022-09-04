import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StreamCreate from './features/Stream/StreamCreate';
import StreamEdit from './features/Stream/StreamEdit';
import StreamList from './features/Stream/StreamList';
import StreamDelete from './features/Stream/StreamDelete';
import StreamShow from './features/Stream/StreamShow';
import Header from './Components/Header';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/stream">
            <Route path="new" element={<StreamCreate />} />
            <Route path="edit" element={<StreamEdit />} />
            <Route path="delete" element={<StreamDelete />} />
            <Route path="show" element={<StreamShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

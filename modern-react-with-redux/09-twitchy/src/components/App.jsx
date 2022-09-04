import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function PageOne() {
  return <h1>P1</h1>;
}

function PageTwo() {
  return <h1>P2</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

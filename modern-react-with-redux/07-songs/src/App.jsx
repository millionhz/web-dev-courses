import React from 'react';
import SongDetail from './features/Songs/SongDetail';
import SongList from './features/Songs/SongList';

function App() {
  return (
    <div className="ui container grid">
      <div className="column eight wide">
        <SongList />
      </div>
      <div className="column eight wide">
        <SongDetail />
      </div>
    </div>
  );
}

export default App;

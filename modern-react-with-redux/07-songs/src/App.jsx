import React from 'react';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';

function App() {
  return (
    <div className="ui container grid">
      <div className="column eight wide">
        <SongList />
      </div>
      <div className="column eight wide">
        <SongDetail song={null} />
      </div>
    </div>
  );
}

export default App;

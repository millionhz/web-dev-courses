import React from 'react';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';
import { selectSong } from './actions';

function App() {
  return (
    <div className="ui container grid">
      <div className="column eight wide">
        <SongList
          onSelectSong={selectSong}
          songs={[{ title: 'The Hills', length: '3:00' }]}
        />
      </div>
      <div className="column eight wide">
        <SongDetail song={null} />
      </div>
    </div>
  );
}

export default App;

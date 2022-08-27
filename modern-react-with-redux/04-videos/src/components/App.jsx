import React from 'react';
import SearchBar from './SearchBar';

function searchVideos(term) {
  console.log(term);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui center aligned container">
        <SearchBar onSubmit={searchVideos} />
      </div>
    );
  }
}

export default App;

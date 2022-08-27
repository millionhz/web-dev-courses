import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
  }

  searchVideos = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term, part: 'snippet' },
    });

    this.setState({ videoList: res.data.items });

    console.log(res.data.items);
  };

  render() {
    const { videoList } = this.state;

    return (
      <div className="ui container">
        <div className="center aligned">
          <SearchBar onSubmit={this.searchVideos} />
        </div>
        <VideoList videos={videoList} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoIframe from './VideoIframe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [], currentVideo: null };
  }

  setCurrentVideo = (video) => {
    this.setState({ currentVideo: video });
  };

  searchVideos = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term, part: 'snippet', type: 'video' },
    });

    this.setState({ videoList: res.data.items });
  };

  render() {
    const { videoList, currentVideo } = this.state;

    return (
      <div className="ui container">
        <div className="center aligned">
          <SearchBar onSubmit={this.searchVideos} />
        </div>
        <div className="ui grid">
          <div className="ten wide column">
            {currentVideo && <VideoIframe video={currentVideo} />}
          </div>
          <div className="six wide column">
            <VideoList videos={videoList} onItemClick={this.setCurrentVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

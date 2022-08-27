import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

// eslint-ignore-next-line
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [], currentVideo: 'something' };
  }

  setCurrentVideo = (id) => {
    this.setState({ currentVideo: id });
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
            <h1>{currentVideo}</h1>
            {/* <iframe
              src="https://www.youtube.com/embed/OlStmta0Vh4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            /> */}
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

import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoIframe from './VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: null, // youtube data api video object
    };
  }

  async componentDidMount() {
    const res = await youtube.get('/videos', {
      params: {
        part: 'snippet,player',
        chart: 'mostPopular',
      },
    });

    this.setState({
      currentVideo: res.data.items[0],
    });
  }

  setCurrentVideo = async ({ id }) => {
    const res = await youtube.get('/videos', {
      params: {
        part: 'snippet,player',
        id: id.videoId,
      },
    });

    this.setState({ currentVideo: res.data.items[0] });
  };

  searchVideos = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
      },
    });

    this.setState({ videoList: res.data.items });
  };

  render() {
    const { videoList, currentVideo } = this.state;

    return (
      <div className="ui container">
        <SearchBar placeholder="The Weeknd" onSubmit={this.searchVideos} />
        <div className="ui grid" style={{ marginTop: '1rem' }}>
          <div className="ten wide column">
            {currentVideo && <VideoIframe video={currentVideo} />}
          </div>
          <div className="six wide column">
            {videoList.length > 0 && (
              <VideoList
                videos={videoList}
                onItemClick={this.setCurrentVideo}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
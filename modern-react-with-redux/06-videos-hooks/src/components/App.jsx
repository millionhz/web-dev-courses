import React from 'react';
import useVideoList from '../hooks/useVideoList';
import useVideo from '../hooks/useVideo';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoIframe from './VideoDetail';

function App() {
  const [videoList, searchVideos] = useVideoList();
  const [video, setVideo] = useVideo();

  return (
    <div className="ui container">
      <SearchBar placeholder="" onSubmit={searchVideos} />
      <div className="ui grid" style={{ marginTop: '1rem' }}>
        <div className="ten wide column">
          {video && <VideoIframe video={video} />}
        </div>
        <div className="six wide column">
          <div className="ui segment">
            {videoList.length > 0 ? (
              <VideoList
                videos={videoList}
                onItemClick={({ id }) => setVideo(id.videoId)}
              />
            ) : (
              <p>No Search Results</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

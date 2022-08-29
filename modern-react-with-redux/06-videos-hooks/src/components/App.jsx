import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoIframe from './VideoDetail';

function App() {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    youtube
      .get('/videos', {
        params: {
          part: 'snippet,player',
          chart: 'mostPopular',
        },
      })
      .then((res) => {
        setCurrentVideo(res.data.items[0]);
      });
  }, []);

  const onItemClick = async ({ id }) => {
    const res = await youtube.get('/videos', {
      params: {
        part: 'snippet,player',
        id: id.videoId,
      },
    });

    setCurrentVideo(res.data.items[0]);
  };

  const searchVideos = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
      },
    });

    setVideoList(res.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar placeholder="" onSubmit={searchVideos} />
      <div className="ui grid" style={{ marginTop: '1rem' }}>
        <div className="ten wide column">
          {currentVideo && <VideoIframe video={currentVideo} />}
        </div>
        <div className="six wide column">
          <div className="ui segment">
            {videoList.length > 0 ? (
              <VideoList videos={videoList} onItemClick={onItemClick} />
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

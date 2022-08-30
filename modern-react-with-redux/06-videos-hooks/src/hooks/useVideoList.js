import { useState } from 'react';

import youtube from '../api/youtube';

export default function useVideoList() {
  const [videoList, setVideoList] = useState([]);

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

  return [videoList, searchVideos];
}

import { useState, useCallback, useEffect } from 'react';
import youtube from '../api/youtube';

export default function useVideo() {
  const [video, setVideo] = useState(null);

  const getVideo = useCallback(async (id) => {
    const identifier = id ? { id } : { chart: 'mostPopular' };

    const res = await youtube.get('/videos', {
      params: {
        part: 'snippet,player',
        ...identifier,
      },
    });

    setVideo(res.data.items[0]);
  }, []);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  return [video, getVideo];
}

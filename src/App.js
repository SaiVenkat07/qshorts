import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './components/video/Video';
import Data from './components/Data/Data';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(Data);
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video, index) => (
          <Video
            key={index}
            url={video.url}
            description={video.description}
            channel={video.channel}
            likes={video.likes}
            dislikes={video.dislike}
            comments={video.comment}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from '../videoFooter/VideoFooter';
import VideoSidebar from '../videoSidebar/VideoSidebar';

function Video({ url, description, channel, likes, dislikes, comments, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video className="video__player" ref={videoRef} onClick={onVideoPress} src={url}></video>
      <VideoFooter channel={channel} description={description} />
      <VideoSidebar likes={likes} dislikes={dislikes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;

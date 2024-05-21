import React from 'react';
import video from '../videos/myvideo.mp4';

const VideoComponent = () => {
  return (
    <div className='video-container'>
      <video className="video" controls autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
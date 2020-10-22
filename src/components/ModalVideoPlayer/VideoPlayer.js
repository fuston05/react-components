// VideoPlayer
import React from "react";

// import { mp4Video } from '/videos/SS_overView.mp4';

const VideoPlayer = () => {
  return (
    <>
      <video controls>
        <source src= '/videos/SS_overView.mp4' type= 'video/mp4'/>

        Your browser does not support the video tag.
      </video>
    </>
  )
};

export default VideoPlayer;
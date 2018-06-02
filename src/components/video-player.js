import React from "react";
import videoSrc from ".././media/sample-video.mp4";
import "../css/video-player.css";

class VideoPlayer extends React.Component {
  render() {
    return <video src={"dist/" + videoSrc} controls />;
  }
}

export default VideoPlayer;

import React from "react";
import videoSrc from ".././media/sample-video.mp4";
import style from "../css/video-player.css";

import playIcon from "../media/play.svg";
import pauseIcon from "../media/pause.svg";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      playPauseIcon: playIcon
    };
  }

  handlePlayPause() {
    if (this.videoRef.current.paused) {
      this.videoRef.current.play();
      this.setState({
        playPauseIcon: pauseIcon
      });
    } else {
      this.videoRef.current.pause();
      this.setState({
        playPauseIcon: playIcon
      });
    }
  }

  render() {
    return (
      <div className={style.videoContainer}>
        <video
          className={style.videoElement}
          ref={this.videoRef}
          src={"dist/" + videoSrc}
          controls={false}
        />
        <div className={style.videoControls}>
          <button onClick={this.handlePlayPause.bind(this)}>
            <img src={"dist/" + this.state.playPauseIcon} width="32px" />
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

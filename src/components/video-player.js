import React from "react";
import videoSrc from ".././media/sample-video.mp4";
import style from "../css/video-player.css";

import playIcon from "../media/play.svg";
import pauseIcon from "../media/pause.svg";
import loadingIcon from "../media/loading.svg";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      isLoading: false,
      playPauseIcon: playIcon
    };
  }

  handlePlayPause() {
    console.log(this.videoRef.current.currentTime);
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
  handleCanPlay() {
    this.setState({
      isLoading: false
    });
  }
  handleWaiting() {
    this.setState({
      isLoading: true
    });
  }

  render() {
    return (
      <div className={style.videoContainer}>
        <video
          className={style.videoElement}
          ref={this.videoRef}
          src={"dist/" + videoSrc}
          controls={false}
          onCanPlay={this.handleCanPlay.bind(this)}
          onWaiting={this.handleWaiting.bind(this)}
        />
        {this.state.isLoading && (
          <div className={style.videoOverlay}>
            <span className={style.videoLoading}>&nbsp;</span>
          </div>
        )}
        <div className={style.videoControls}>
          <button
            className={style.playPauseButton}
            onClick={this.handlePlayPause.bind(this)}
          >
            <img src={"dist/" + this.state.playPauseIcon} width="32px" />
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

import React from "react";
import videoSrc from ".././media/sample-video.mp4";
import style from "../css/video-player.css";

import playIcon from "../media/play.svg";
import pauseIcon from "../media/pause.svg";
import loadingIcon from "../media/loading.svg";
import thumbnail from "../media/thumbnail.jpg";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      isLoading: false,
      isEnded: false,
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

  handlePlaying(){
    this.setState({
      isLoading: false
    });
  }
  handleWaiting() {
    this.setState({
      isLoading: true
    });
  }
  handleOnEnded(){
    this.setState({
      isEnded: true,
      playPauseIcon: playIcon
    })
  }

  render() {
    return (
      <div className={style.videoContainer}>
        <video
          className={style.videoElement}
          poster={"dist/" + thumbnail}
          ref={this.videoRef}
          src={"dist/" + videoSrc}
          controls={false}
          onWaiting={this.handleWaiting.bind(this)}
          onPlaying={this.handlePlaying.bind(this)}
          onEnded={this.handleOnEnded.bind(this)}
        />
        {this.state.isLoading && (
          <div className={style.videoOverlay}>
            <span className={style.videoLoading}>&nbsp;</span>
          </div>
        )}
        {this.state.isEnded && (
          <div className={style.videoOverlay}>
            <button
              className={style.playPauseButton}
              onClick={this.handlePlayPause.bind(this)}
            >
              <img src={"dist/" + this.state.playPauseIcon} width="64px" height="64px"/>
            </button>
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

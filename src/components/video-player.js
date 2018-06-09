import React from "react";
import videoSrc from ".././media/sample-video.mp4";
import style from "../css/video-player.css";
import Seekbar from "./seek-bar";

import playIcon from "../media/play.svg";
import pauseIcon from "../media/pause.svg";
import fullScreenIcon from "../media/full-screen.svg";
import loadingIcon from "../media/loading.svg";
import muteIcon from "../media/mute.svg";
import unMuteIcon from "../media/un-mute.svg";

import thumbnail from "../media/thumbnail.jpg";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      isLoading: false,
      isEnded: false,
      playPauseIcon: playIcon,
      muteUnMuteIcon: unMuteIcon,
      currentPosition: 0
    };
  }

  // Play and Pause
  handlePlayPause() {
    console.log(this.videoRef.current.currentTime);
    if (this.videoRef.current.paused) {
      this.videoRef.current.play();
      this.setState({
        playPauseIcon: pauseIcon,
        isEnded: false
      });
    } else {
      this.videoRef.current.pause();
      this.setState({
        playPauseIcon: playIcon
      });
    }
  }

  // Mute and Unmute
  handleMuteUnMute() {
    let video = this.videoRef.current;
    if (video.muted) {
      video.muted = false;
      this.setState({
        muteUnMuteIcon: unMuteIcon
      });
    } else {
      video.muted = true;
      this.setState({
        muteUnMuteIcon: muteIcon
      });
    }
  }

  // Video Play Mode
  handlePlaying(position) {
    this.setState({
      isLoading: false
    });
  }

  // Video Loading Mode
  handleWaiting() {
    this.setState({
      isLoading: true
    });
  }

  // Video Ended Mode
  handleOnEnded() {
    this.setState({
      isEnded: true,
      playPauseIcon: playIcon,
      muteUnMuteIcon: unMuteIcon,
      currentPosition: 0
    });
  }

  // Full Screen Mode
  handleFullScreen() {
    if (this.videoRef.current.requestFullScreen) {
      this.videoRef.current.requestFullScreen();
    } else if (this.videoRef.current.mozRequestFullScreen) {
      this.videoRef.current.mozRequestFullScreen();
    } else if (this.videoRef.current.webkitRequestFullScreen) {
      this.videoRef.current.webkitRequestFullScreen();
    }
  }

  // Seekbar
  handleSeekBar(e) {
    let value = e.target.value;
    let currentTime = this.videoRef.current.currentTime;
    let totalDuration = this.videoRef.current.duration;
    let position = (totalDuration / 100) * value;
    currentTime = parseFloat(position);
    this.setState({
      currentPosition: value
    });
  }

  // Progress Bar
  handleTimeUpdate() {
    let currentTime = this.videoRef.current.currentTime;
    let totalDuration = this.videoRef.current.duration;
    let value = (currentTime / totalDuration) * 100;
    this.setState({
      currentPosition: value
    });
  }

  render() {
    return (
      <div className={style.videoContainer}>
        <video
          className={style.videoElement}
          poster={this.props.poster}
          ref={this.videoRef}
          src={this.props.src}
          controls={false}
          onWaiting={this.handleWaiting.bind(this)}
          onPlaying={this.handlePlaying.bind(this)}
          onEnded={this.handleOnEnded.bind(this)}
          onTimeUpdate={this.handleTimeUpdate.bind(this)}
        />
        {this.state.isLoading && (
          <div className={style.videoOverlay}>
            <span className={style.videoLoading}>&nbsp;</span>
          </div>
        )}
        {this.state.isEnded && (
          <div className={style.videoOverlay}>
            <button
              className={style.playPauseButtonLarge}
              onClick={this.handlePlayPause.bind(this)}
            >
              <img
                src={"dist/" + this.state.playPauseIcon}
                width="64px"
                height="64px"
              />
            </button>
          </div>
        )}
        <div
          className={style.videoControls}
          style={{
            background: this.props.themeColor ? this.props.themeColor : ""
          }}
        >
          <button
            className={style.playPauseButton}
            onClick={this.handlePlayPause.bind(this)}
          >
            <img src={"dist/" + this.state.playPauseIcon} width="32px" />
          </button>

          <Seekbar
            handleSeekBar={this.handleSeekBar.bind(this)}
            value={this.state.currentPosition}
          />

          <button
            className={style.muteButton}
            onClick={this.handleMuteUnMute.bind(this)}
          >
            <img src={"dist/" + this.state.muteUnMuteIcon} width="32px" />
          </button>

          <button
            className={style.fullScreenButton}
            onClick={this.handleFullScreen.bind(this)}
          >
            <img src={"dist/" + fullScreenIcon} width="32px" />
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

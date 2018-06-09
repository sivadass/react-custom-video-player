import React from "react";
import style from "../css/video-player.css";

const SeekBar = props => {
  return (
    <input
      type="range"
      min="1"
      max="100"
      value={props.value}
      className={style.seekBar}
      onChange={props.handleSeekBar}
    />
  );
};

export default SeekBar;

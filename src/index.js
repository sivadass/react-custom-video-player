import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/video-player";

import style from "./css/main.css";

const App = () => {
  return (
    <div className={style.wrapper}>
      {/* <h1 className={style.title}>React Custom Video Player</h1> */}
      <VideoPlayer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

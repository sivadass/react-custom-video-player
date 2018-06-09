import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/video-player";

import style from "./css/main.css";

const App = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>React Custom Video Player</h1>
      <VideoPlayer
        src="https://res.cloudinary.com/sivadass/video/upload/v1528526801/bird.mp4"
        poster="https://res.cloudinary.com/sivadass/image/upload/v1528527903/bird-poster.jpg"
        //themeColor="#4099ff"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import "./videoItem.css";
const videoItem = ({ video, onSelectedVideos }) => {
  return (
    <div className="video-item item" onClick={() => onSelectedVideos(video)}>
      <img
        className="ui image "
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default videoItem;

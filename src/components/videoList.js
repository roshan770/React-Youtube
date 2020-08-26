import React from "react";
import VideoItem from "./videoItem";

const videoList = ({ videos, onSelectedVideos }) => {
  const list = videos.map((video) => {
    return (
      <VideoItem
        onSelectedVideos={onSelectedVideos}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{list}</div>;
};
export default videoList;

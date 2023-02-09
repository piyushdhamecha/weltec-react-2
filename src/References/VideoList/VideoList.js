import data from "./data.json";
import {  VideoListContainer } from "./VideoList.styled";
import VideoListItem from "./VideoListItem";

const VideoList = () => {
  return (
    <div>
      <h2>Video List</h2>
      <VideoListContainer>
        {data.categories[0].videos.map((videoItem) => {
          return (
            <VideoListItem
              thumb={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${videoItem.thumb}`}
              src={videoItem.sources[0]}
            />
          );
        })}
      </VideoListContainer>
    </div>
  );
};

export default VideoList;

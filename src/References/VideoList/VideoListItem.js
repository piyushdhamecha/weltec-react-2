import { useRef } from "react";
import { VideoItemStyled } from "./VideoList.styled";

const VideoListItem = ({ src, thumb}) => {
  const videoRef = useRef();

  const handlePlayClick = () => {
    videoRef.current.play();
  };

  const handlePauseClick = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <VideoItemStyled
        poster={thumb}
        src={src}
        ref={videoRef}
      />
      <div>
        <button onClick={handlePlayClick}>Play</button>
        <button onClick={handlePauseClick}>Pause</button>
      </div>
    </div>
  );
};

export default VideoListItem

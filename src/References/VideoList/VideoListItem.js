import { useRef, useState } from "react";
import { VideoItemStyled } from "./VideoList.styled";
import VideoListItemChild from "./VideoListItemChild";

const VideoListItem = ({ src, thumb }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handlePlayPauseToggleClick = () => {
    if(isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleMuteUnmuteToggleClick = () => {
    if(isMuted) {
      videoRef.current.muted = false
    } else {
      videoRef.current.muted = true
    }

    setIsMuted(!isMuted)
  }

  return (
    <div>
      {/* <VideoItemStyled poster={thumb} src={src} ref={videoRef} /> */}
      {/* <video ref={videoRef} /> */}
      <VideoListItemChild poster={thumb} src={src} ref={videoRef} />
      <div>
        <button onClick={handlePlayPauseToggleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleMuteUnmuteToggleClick}>{isMuted ? 'Unmute' : 'Mute'}</button>
      </div>
    </div>
  );
};

export default VideoListItem;

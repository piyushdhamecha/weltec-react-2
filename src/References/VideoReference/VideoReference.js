import { useEffect, useRef, useState } from "react";
import { VideoStyled } from "./VideoReference.styled";

const VideoReference = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef();


  const handlePlayToggleClick = () => {
    setIsPlaying(!isPlaying)

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMuteToggleClick = () => {
    setIsMuted(!isMuted)
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div>
      <VideoStyled
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // onMouseOver={(e) => {
        //   e.target.play();
        // }}
        // onMouseLeave={(e) => {
        //   e.target.pause();
        // }}
        muted={true}
        ref={videoRef}
      />
      <div>
        <button onClick={handlePlayToggleClick}>
          {isPlaying ? "Pause" : "Play" }
        </button>
        <button onClick={handleMuteToggleClick}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default VideoReference;

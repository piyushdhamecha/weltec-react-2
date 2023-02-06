import { VideoStyled } from "./VideoReference.styled";

const VideoReference = () => {
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
      />
      <div>
        <button>Play</button>
        <button>Pause</button>
      </div>
    </div>
  );
};

export default VideoReference;

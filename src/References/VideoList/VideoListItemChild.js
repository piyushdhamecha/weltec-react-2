import { forwardRef } from "react";
import { VideoItemStyled } from "./VideoList.styled";

// const VideoListItemChild = ({ children, poster, src, ref }) => {
//   console.log({ children, ref });
//   return <VideoItemStyled poster={poster} src={src} />;
// };

const VideoListItemChild = forwardRef(({poster, src}, ref) => {
  console.log({ ref })
  return <VideoItemStyled poster={poster} src={src} ref={ref} />;
})

export default VideoListItemChild;

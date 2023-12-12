import ReactPlayer from "react-player";
import { useRef } from "react";

import videoThumbnail from "../../images/video_thumbnail.jpg";
import styles from "./VideoPlayer.module.css";
import Timeline from "./timeline/Timeline";

const VideoPlayer = (props) => {
  // referencing react player to get the data
  const videoPlayerRef = useRef(null);

  const timelineItems = props.timelineItems;

  // Function to seek to the given time
  const seekToPositionHandler = (position) => {
    videoPlayerRef.current.seekTo(position);
  };

  return (
    <div>
      <div className={styles["player-wrapper"]}>
        <ReactPlayer
          ref={videoPlayerRef}
          url="https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/videos/Avengers.mp4"
          controls
          playing
          light={videoThumbnail}
          className={styles.player}
        />
      </div>
      <Timeline timelineItems={timelineItems} seekToPositionHandler={seekToPositionHandler} />
    </div>
  );
};
export default VideoPlayer;

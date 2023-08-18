import { Video } from "../../styles/carrossel/videos";

type VideoProps = {
  url: string;
};

function VideoCard({ url }: VideoProps) {
  return (
    <Video
      width="430px"
      height="260px"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></Video>
  );
}

export default VideoCard;

import Slider from "./Slider";

type CarrosselProps = {
  videoType: "front" | "data" | "mobile";
};

function Carrossel({ videoType }: CarrosselProps) {
  return <Slider type={videoType} />;
}

export default Carrossel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperBox } from "../../styles/carrossel/swiper";
import VideoCard from "./VideoCard";
import { videos_front, videos_data } from "../../data/dados_iniciais.json";

type SliderProps = {
  type: "front" | "data" | "mobile";
};

function Slider({ type }: SliderProps) {
  function videoType() {
    if (type == "front") {
      return videos_front.map((video) => (
        <SwiperSlide>
          <VideoCard url={video.url} />
        </SwiperSlide>
      ));
    }
    if (type == "data") {
      return videos_data.map((video) => (
        <SwiperSlide>
          <VideoCard url={video.url} />
        </SwiperSlide>
      ));
    }
  }
  return (
    <SwiperBox>
      <Swiper
        className="swiper-container"
        modules={[Navigation]}
        navigation={true}
        slidesPerView={3}
      >
        {videoType()}
      </Swiper>
    </SwiperBox>
  );
}

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperBox } from "../../styles/carrossel/swiper";

function Slider() {
  return (
    <SwiperBox>
      <Swiper
        className="swiper-container"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>Teste 1</SwiperSlide>
        <SwiperSlide>Teste 2</SwiperSlide>
        <SwiperSlide>Teste 3</SwiperSlide>
      </Swiper>
    </SwiperBox>
  );
}

export default Slider;

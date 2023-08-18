import {
  Banner,
  BannerImage,
  BannerFront,
  BannerContent,
} from "../styles/banner";
import FrontEndTag from "./tags/FrontEnd";

function BannerComponent() {
  return (
    <Banner>
      <BannerImage src="BannerBackground.png" alt="Banner Image" />
      <BannerFront>
        <BannerContent>
          <FrontEndTag />
          <h3>SEO com React</h3>
          <p>
            Esse desafio é uma forma de aprendizado. É um mecanismo onde você
            pode se engajar na resolução de um problema para poder aplicar todo
            o conhecimento adquirido na Formação React.
          </p>
        </BannerContent>
        <section>
          <iframe
            width="640px"
            height="330px"
            src="https://www.youtube.com/embed/Z-N5Fr9P-GU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </BannerFront>
    </Banner>
  );
}

export default BannerComponent;

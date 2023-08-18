import ButtonComponent from "./Button";
import { Header, DivImage } from "../styles/header";

function HeaderComponent() {
  return (
    <Header>
      <DivImage>
        <a href="http://localhost:5173">
          <img
            src="https://fontmeme.com/permalink/230818/7598d118bae62fc080515becc59545cf.png"
            alt="logo"
          />
        </a>
      </DivImage>
      <ButtonComponent headerButton>Novo vídeo</ButtonComponent>
    </Header>
  );
}

export default HeaderComponent;

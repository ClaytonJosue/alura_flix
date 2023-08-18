import BannerComponent from "./components/Banner";
import Header from "./components/Header";
import Carrossel from "./components/carrossel/Carrossel";

function App() {
  return (
    <>
      <Header />
      <BannerComponent />
      <Carrossel videoType="front" />
    </>
  );
}

export default App;

import ButtonComponent from "./components/Button";

function App() {
  return (
    <>
      <p>Hello World</p>
      <ButtonComponent width={"360px"} bgColor="#ff00F3">
        Salvar
      </ButtonComponent>
      <ButtonComponent>Teste</ButtonComponent>
    </>
  );
}

export default App;

import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="max-w-[1600px]">
      <Header></Header>
      <Container></Container>
      <Slider></Slider>
    </div>
  );
}

export default App;
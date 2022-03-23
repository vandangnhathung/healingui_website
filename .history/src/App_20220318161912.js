import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import OurDesign from "./components/OurDesign/OurDesign";
import LastestArticle from "./components/LatestArticle/LastestAcrticle";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="max-w-[1600px] m-auto">
      <Header></Header>
      <Container></Container>
      <Slider></Slider>
      <OurDesign></OurDesign>
      <LastestArticle></LastestArticle>
      <Footer></Footer>
    </div>
  );
}

export default App;

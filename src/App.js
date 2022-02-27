import "./App.css";
import Footer from "./Components/Footer/Footer";
import GoldPrice from "./Components/GoldPrice/GoldPrice";
import Header from "./Components/Header/Header";
import TodayPrice from "./Components/TodayPrice/TodayPrice";

function App() {
  return (
    <div className="App">
      <span className="first_div">
        <Header />
        <GoldPrice />
        <Footer />
      </span>
      <span className="second_div">
        <Header />
        <TodayPrice />
        <Footer />
      </span>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IdeaBoard from "./components/IdeaBoard";
import Intro from "./components/Intro";
import Segment from "./components/Segment";

function App() {
  return (
    <div className="App">
      <div className="wrapper__main">
        <Header />
        <Intro />
        {/* 8 SECTIONS */}
        <Segment />

        <IdeaBoard />
        <Footer />
      </div>
    </div>
  );
}

export default App;

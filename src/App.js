import "./App.css";
import FlipTest from "./components/FlipTest";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IdeaBoard from "./components/IdeaBoard";
import Intro from "./components/Intro";
import SegmentFeed from "./components/SegmentFeed";

function App() {
  return (
    <div className="App">
      <div className="wrapper__main">
        <Hero />
        <Intro />
        <IdeaBoard />
        {/* <FlipTest />  NOT WORKING */}
        {/* 8 SECTIONS */}
        <SegmentFeed />

        <Footer />
      </div>
    </div>
  );
}

export default App;

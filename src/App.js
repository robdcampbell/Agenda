import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IdeaBoard from "./components/IdeaBoard";
import Intro from "./components/Intro";
import Segment from "./components/Segment";
import SegmentFeed from "./components/SegmentFeed";

function App() {
  return (
    <div className="App">
      <div className="wrapper__main">
        <Header />
        <Intro />
        {/* 8 SECTIONS */}
        <SegmentFeed />

        <IdeaBoard />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IdeaBoard from "./components/IdeaBoard";
import Intro from "./components/Intro";
import SegmentFeed from "./components/SegmentFeed";
import { AgendaProvider } from "./context/AgendaContext";

function App() {
  return (
    <AgendaProvider>
      <div className="App">
        <div className="wrapper__main">
          <Hero />
          <Intro />
          {/* <FlipTest />  NOT WORKING */}
          <SegmentFeed />
          <IdeaBoard />
          <Footer />
        </div>
      </div>
    </AgendaProvider>
  );
}

export default App;

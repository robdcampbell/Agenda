import React from "react";
import { useAgenda } from "../context/AgendaContext";
import Hero from "./Hero";
import IdeaBoard from "./IdeaBoard";
import Intro from "./Intro";
import SegmentFeed from "./SegmentFeed";
import Footer from "./Footer";

const Home = () => {
  const { theme, setTheme } = useAgenda();

  return (
    <>
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
    </>
  );
};

export default Home;

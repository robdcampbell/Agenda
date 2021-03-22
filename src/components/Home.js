import React from "react";
import { useAgenda } from "../context/AgendaContext";
import Hero from "./Hero";
import IdeaBoard from "./IdeaBoard";
import Intro from "./Intro";
import SegmentFeed from "./SegmentFeed";
import Footer from "./Footer";

const Home = () => {
  let { theme } = useAgenda();

  return (
    <>
      <main
        className={
          theme === "dark"
            ? "App dark__theme"
            : (theme = "red"
                ? "App red__theme"
                : (theme = "red" ? "App red__theme" : "App dark__theme"))
        }
      >
        <div className="wrapper__main">
          <Hero />
          <Intro />
          <SegmentFeed />
          <IdeaBoard />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;

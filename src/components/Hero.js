import React from "react";
import { useAgenda } from "../context/AgendaContext.js";

const Header = () => {
  const { theme, setTheme } = useAgenda();

  return (
    <section className="heading__section">
      <div className="titles" id="top">
        <div className="heading__left">
          <h3>Daily Goals,</h3>
          <h3>smaller parts.</h3>
        </div>
        <div className="heading__right">
          <p>mode:</p>
          <button>dark</button>
          <p>|</p>
          <button>light</button>
          <p>|</p>
          <button>R.</button>
        </div>
      </div>

      <div className="headings__bottom">
        <div className="nav__buttons">
          <a href="#section1">01-08</a>
          {/* <a href="#section2">__02</a>
          <a href="#section3">__03</a>
          <a href="#section4">__04</a>
          <a href="#section5">__05</a>
          <a href="#section6">__06</a>
          <a href="#section7">__07</a>
          <a href="#section8">__08</a> */}
        </div>
        <div className="brand">
          <h1>Agenda.</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;

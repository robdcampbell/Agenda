import React from "react";

const Header = () => {
  return (
    <header className="heading__section">
      <div className="titles">
        <div className="heading__left">
          <h3>heading</h3>
          <h3>subheading</h3>
        </div>
        <div className="heading__right">
          <h3>heading</h3>
        </div>
      </div>

      <div className="headings__bottom">
        <div className="nav__buttons">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="brand">
          <h1>Agenda</h1>
          <h4>_ 8 hours</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;

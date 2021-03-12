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
          <button>__01</button>
          <button>__02</button>
          <button>__03</button>
          <button>__04</button>
          <button>__05</button>
          <button>__06</button>
          <button>__07</button>
          <button>__08</button>
        </div>
        <div className="brand">
          <h1>Agenda</h1>
          <h4>_ 8 hours, let's go.</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;

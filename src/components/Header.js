import React from "react";

const Header = () => {
  return (
    <section className="heading__section">
      <div className="titles">
        <div className="heading__left">
          <h3>Daily Goals,</h3>
          <h3>in smaller parts.</h3>
        </div>
        <div className="heading__right">
          <h3>01 - 08</h3>
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
          <h4>let's go.</h4>
        </div>
      </div>
    </section>
  );
};

export default Header;

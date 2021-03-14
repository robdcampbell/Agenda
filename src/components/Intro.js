import React, { useState } from "react";

const Intro = () => {
  const [showDaily, setShowDaily] = useState(false);

  return (
    <section className="intro__section">
      <div className="intro__titles">
        <h2>Segments: </h2>
        <h2>Pomodoro Style</h2>
      </div>

      <div className="intro__bottom">
        <div className="intro__content">
          {/* <p className="intro__text">
            The Pomodoro Technique helps you resist all of those
            self-interruptions and re-train your brain to focus. Each "pomodoro"
            is dedicated to one task and each break is a chance to reset and
            bring your attention back to what you should be working on.
          </p> */}
          <p className="intro__text">
            Our "normal" day can snowball. Agenda breaks 8 hrs into segments
            (with breaks), and keeps you from going down a rabbit hole.
          </p>
        </div>
        <button type="button" onClick={(e) => setShowDaily(!showDaily)}>
          <h3 className="add__ideas add__daily">
            <span>+</span> Set daily goals.
          </h3>
        </button>
      </div>

      {showDaily && (
        <div className="daily__goals">
          <h1>Hello World.</h1>
          <div className="goals">
            <label htmlFor="">_01:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_02:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_03:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_04:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_05:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_06:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_07:</label>
            <input type="text" />
          </div>
          <div className="goals">
            <label htmlFor="">_08:</label>
            <input type="text" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;

import React from "react";

const Intro = () => {
  return (
    <section className="intro__section">
      <div className="titles__intro">
        <div className="heading__left">
          <h3>Segment -</h3>
          <h3>breakdown:</h3>
        </div>
        <div className="heading__right">
          <h2>__ Pomodoro Style.</h2>
        </div>
      </div>

      {/* <div className="headings__bottom"> */}
      <div className="intro__content">
        <p className="intro__text">
          The Pomodoro Technique helps you resist all of those
          self-interruptions and re-train your brain to focus. Each "pomodoro"
          is dedicated to one task and each break is a chance to reset and bring
          your attention back to what you should be working on.
        </p>
        <p className="intro__text">
          Our "normal" day can snowball. <strong>Agenda</strong> breaks 8 hrs
          into segments (with breaks), and keeps you from going down a rabbit
          hole.
        </p>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Intro;

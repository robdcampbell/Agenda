import React from "react";

const Intro = () => {
  return (
    <section className="intro__section">
      <div className="intro__titles">
        <h2>Segments: Pomodoro Style.</h2>
      </div>

      <div className="intro__bottom">
        <h3 className="add__ideas">
          <span>+</span> Add daily goals.
        </h3>
        <div className="intro__content">
          <p className="intro__text">
            The Pomodoro Technique helps you resist all of those
            self-interruptions and re-train your brain to focus. Each "pomodoro"
            is dedicated to one task and each break is a chance to reset and
            bring your attention back to what you should be working on.
          </p>
          <p className="intro__text">
            Our "normal" day can snowball. <strong>Agenda</strong> breaks 8 hrs
            into segments (with breaks), and keeps you from going down a rabbit
            hole.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

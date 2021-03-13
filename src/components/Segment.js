import React, { useState } from "react";

const Segment = ({ index }) => {
  const [toggleHidden, setToggleHidden] = useState(true);

  return (
    <section className="hr__section" id={`section${index + 1}`}>
      <h3>__0{index + 1}:</h3>
      <button type="button" onClick={(e) => setToggleHidden(!toggleHidden)}>
        {toggleHidden ? "Show goal" : "Hide section"}
      </button>
      <div className={toggleHidden ? "hidden" : ""}>
        <div className="titles__intro">
          <div className="heading__left">
            <p>status:</p>
          </div>
          <div className="heading__right">
            <label htmlFor="">Goal: </label>
          </div>
        </div>

        {/* <div className="headings__bottom"> */}
        <div className="intro__content">
          <p className="intro__text">
            First things first, Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellat minus inventore id laborum alias debitis
            voluptates numquam commodi fugiat cumque!
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Segment;

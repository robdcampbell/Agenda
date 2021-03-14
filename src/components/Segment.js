import React, { useState } from "react";

const Segment = ({ index }) => {
  const [toggleHidden, setToggleHidden] = useState(true);

  // const toggleSection = () => {
  //   if (toggleSection) {
  //     setToggleHidden(false);
  //   }
  // };

  return (
    <section className="hr__segment" id={`section${index + 1}`}>
      <button type="button" onClick={(e) => setToggleHidden(!toggleHidden)}>
        {toggleHidden ? (
          <h3>
            {" "}
            <span className="toggle__segment">+ 0{index + 1}: </span>
          </h3>
        ) : (
          <h3>
            {" "}
            <span className="toggle__segment">- 0{index + 1}:</span>
          </h3>
        )}
      </button>
      <div className={toggleHidden ? "hidden" : ""}>
        <div className="titles__intro">
          <div className="heading__left">
            <p>status:</p>
          </div>
          <div className="heading__right"></div>
        </div>

        {/* <div className="headings__bottom"> */}
        <div className="segment__content">
          <h3>Description:</h3>
          <p className="segment__text">
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

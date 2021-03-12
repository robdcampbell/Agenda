import React from "react";

const Segment = ({ index }) => {
  return (
    <section className="intro__section">
      <div className="titles__intro">
        <div className="heading__left">
          <h3>__0{index + 1}:</h3>
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
    </section>
  );
};

export default Segment;

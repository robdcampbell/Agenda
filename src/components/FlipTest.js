import React from "react";
import "./FlipTest.css";
import "./flip/flip.min.css";
import "./flip/flip.min.js";

const FlipTest = () => {
  return (
    <div className="tick" data-did-init="handleTickInit">
      <div data-layout="horizontal fit">
        <span data-key="hours" data-transform="pad(00)" data-view="flip"></span>

        <span
          data-key="minutes"
          data-transform="pad(00)"
          data-view="flip"
        ></span>

        {/* <span
          data-key="seconds"
          data-transform="pad(00)"
          data-view="flip"
        ></span>  */}
      </div>
    </div>
  );
};

export default FlipTest;

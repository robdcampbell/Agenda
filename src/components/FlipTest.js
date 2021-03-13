import React, { useEffect } from "react";
import Tick from "@pqina/flip";
import "./flip/flip.min.css";
import "./flip/flip.min.js";
import "./FlipTest.css";

function handleTickInit(tick) {
  // start interval (default is 1 second) and update clock with current time
  Tick.helper.interval(function () {
    var d = Tick.helper.date();
    tick.value = {
      sep: ".",
      hours: d.getHours(),
      minutes: d.getMinutes(),
      // seconds: d.getSeconds(),
    };
  });
}

const FlipTest = () => {
  return (
    <section className="flip__section">
      <h2>Flip Clock Test</h2>
      <div className="tick" data-did-init="handleTickInit">
        <div data-layout="horizontal fit">
          <span
            data-key="hours"
            data-transform="pad(00)"
            data-view="flip"
          ></span>

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
    </section>
  );
};

export default FlipTest;

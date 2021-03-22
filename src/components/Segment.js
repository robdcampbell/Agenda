import React, { useState } from "react";
import {useAgenda} from '../context/AgendaContext'

const Segment = ({ index }) => {
  const [toggleHidden, setToggleHidden] = useState(true);
  const {dailyGoals, setDailyGoals} = useAgenda();
  const [segmentGoal, setSegmentGoal] = useState(dailyGoals[index])
  
  // const dailySegment = `daily${index+1}`
  // const dailySegment = dailyGoals[index];

  const updateText = (e)=>{
      console.log(dailyGoals);

      setDailyGoals(state => {
        state[index]= segmentGoal;
        return state;
      })
  }

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
          <div className="segment__left">
            <label>status:</label>
            <select name="status">
              <option value="in-progress">In-Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div className="heading__right"></div>
        </div>

        <div className="segment__content">
          <h3>Description:</h3>
          <input  className="segment__text"
           value={segmentGoal} onChange={(e)=> setSegmentGoal(e.target.value)} />
          <button type="button" onClick={(e)=>updateText(e)}>Update</button>
        </div>
      </div>
    </section>
  );
};

export default Segment;

import React, { useState } from "react";
import {useAgenda} from '../context/AgendaContext'
import InitialGoal from "./InitialGoal";

const Intro = () => {
  const [showDaily, setShowDaily] = useState(false);
  const {initialGoals, setDailyGoals} = useAgenda();
  

  const submitGoals = ()=>{
    console.log(initialGoals);
    setDailyGoals(initialGoals);
  }

  return (
    <section className="intro__section">
      <div className="intro__titles">
        <h2>Pomodoro.</h2>
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
          {!showDaily ? (
            <h3 className="add__ideas add__daily">
            <span>+</span> Set initial goals.
          </h3>
          ) : (
            <h3 className="add__ideas add__daily">
            <span>-</span> Hide initial goals.
          </h3>
          ) }
        </button>
      </div>

      <div className={showDaily ? "daily__goals" : "hidden"}>
        <h3>Tackle today.</h3>
        
        {/* WILL REFASCTOR WITH AN 'INITIAL GOAL COMPONENT' */}
        
        {initialGoals.map((x, index) =>(
          <InitialGoal key={index} index={index} />
        ))
      }

{/*         

        <div className="goals">
          <label htmlFor="">_01:</label>
          <input type="text" value={initialGoals.daily1} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily1: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_02:</label>
          <input type="text" value={initialGoals.daily2} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily2: e.target.value
          }))}/>
        </div>

        <div className="goals">
          <label htmlFor="">_03:</label>
          <input type="text" value={initialGoals.daily3} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily3: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_04:</label>
          <input type="text" value={initialGoals.daily4} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily4: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_05:</label>
          <input type="text" value={initialGoals.daily5} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily5: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_06:</label>
          <input type="text" value={initialGoals.daily6} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily6: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_07:</label>
          <input type="text" value={initialGoals.daily7} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily7: e.target.value
          }))} />
        </div>

        <div className="goals">
          <label htmlFor="">_08:</label>
          <input type="text" value={initialGoals.daily8} onChange={(e)=> setInitialGoals(initialState => ({
            ...initialState,
            daily8: e.target.value
          }))} />
        </div> */}

         <button type="button" className="submitGoals__btn" onClick={(e)=>submitGoals()} >Submit Daily Goals</button>
      </div> 
    </section>
  );
};

export default Intro;

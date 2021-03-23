import React, {useState} from 'react'
import {useAgenda} from '../context/AgendaContext'

const InitialGoal = ({index}) => {
  const {initialGoals, setInitialGoals} = useAgenda();
  const [segmentInfo,setSegmentInfo ] = useState(initialGoals[index]);
  
  const initalGoalsUpdate = (e)=>{
    setSegmentInfo(e.target.value)

    setInitialGoals(state => {
      state[index]= e.target.value;
      return state;
    })
  }
  
  return (
      <div className="goals">
          <label htmlFor="">{`_0${index+1}:`}</label>
          <input type="text" value={segmentInfo} onChange={(e)=> initalGoalsUpdate(e)}/>
        </div>
  )
}

export default InitialGoal

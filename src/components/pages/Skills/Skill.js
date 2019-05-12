import React from 'react';

const Skill = (props) => {
  return (
    <div className='skill'>
      <h2>{props.name}</h2>
      <p><span className={props.skill}>0</span></p>
    </div>
  )
}

export default Skill;
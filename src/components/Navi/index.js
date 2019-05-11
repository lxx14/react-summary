import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navi = () => {
  return (
    <div className='navi-container'>
      <ul className='navi-list'>
        <li><NavLink to='/skills'><i className="fas fa-laptop"></i> Skills</NavLink></li>
        <li><NavLink to='/experiences'><i className="fas fa-glasses"></i> Experiences</NavLink></li>
        <li><NavLink to='/projects'><i className="fas fa-file-alt"></i> Projects</NavLink></li>
        <li><NavLink exact to='/'><i className="fas fa-question"></i> About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navi;
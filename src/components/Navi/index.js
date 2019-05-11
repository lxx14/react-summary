import React from 'react';
import './style.scss';

const Navi = () => {
  return (
    <div className='navi-container'>
      <ul className='navi-list'>
        <li><a href='#'><i class="fas fa-laptop"></i> Skills</a></li>
        <li><a href='#'><i className="fas fa-glasses"></i> Experiences</a></li>
        <li><a href='#'><i className="fas fa-file-alt"></i> Projects</a></li>
        <li><a href='#'><i className="fas fa-question"></i> About</a></li>
      </ul>
    </div>
  )
}

export default Navi;
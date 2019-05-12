import React from 'react';
import Skill from './Skill';
import './style.scss';

const Skills = () => {
  return (
    <div className='page skills-page'>
      <h1>Skills</h1>
      <Skill name='HTML+CSS:' skill='html-css'/>
      <Skill name='Javascript:' skill='javascript'/>
      <Skill name='React+Redux:' skill='react-redux'/>
      <Skill name='GIT' skill='git'/>
      
    </div>
  )
}

export default Skills;
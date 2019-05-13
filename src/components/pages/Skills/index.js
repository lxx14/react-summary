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
      <Skill name='Node (npm/yarn)' skill='node'/>
      <Skill name='Jest' skill='jest'/>
      <Skill name='Webpack' skill='webpack'/>
    </div>
  )
}

export default Skills;
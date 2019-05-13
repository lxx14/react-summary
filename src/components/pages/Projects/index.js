import React from 'react';
import Train from './views/Train';
import Works from './views/Works';

import './style.scss';

const Projects = () => {
  return (
    <div className='page'>
      <Train />
      <Works />
    </div>
  )
}

export default Projects;
import React from 'react';
import Contacts from './views/Contacts';
import Education from './views/Education';
import Interests from './views/Interests';
import Languages from './views/Languages';
import Photo from './views/Photo';
import './style.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Photo />
      <Contacts />
      <Education />
      <Languages />
      <Interests />
    </div>
  )
}

export default Sidebar;
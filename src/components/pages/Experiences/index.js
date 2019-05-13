import React from 'react';
import JobsList from './JobsList';
import './style.scss';

const Experiences = () => {
  return (
    <div className='page'>
      <h1>My current & previous jobs</h1>
      <JobsList />
    </div>
  )
}

export default Experiences;
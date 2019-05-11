import React from 'react';
import './style.scss';

const About = () => {
  return (
    <div className='page about-page'>
      <h1>Hello!</h1>
      <p>This summary complitely made on React, with usage some tehnologies, such us React-Router, Redux, SCSS, HTML 5.</p>
      <p><i className="fas fa-angle-left"></i> Here is navigation panel...</p>
      <p id='to-left-side'>...And here is short info about me <i className="fas fa-angle-right"></i></p>
      <p id='to-center'>I'm eagerly waiting for Your feedback, thank You for reading!</p>
    </div>
  )
}

export default About;
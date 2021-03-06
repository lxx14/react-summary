import React from 'react';
import './style.scss';

const About = () => {
  return (
    <div className='page about-page'>
      <h1>Hello!</h1>
      <p>This summary complitely made on React, with using some technologies, such as React-Router, Redux, SCSS, HTML 5.</p>
      <p><i className={(window.innerWidth >= 1125) ? "fas fa-angle-left" : "fas fa-angle-left rotate"}></i> Here is a navigation panel...</p>
      <p id='to-left-side'>...And here is a short info about me <i className="fas fa-angle-right"></i></p>
      <p id='to-center'>I'm looking forward for Your feedback, thank You for reading!</p>
    </div>
  )
}

export default About;
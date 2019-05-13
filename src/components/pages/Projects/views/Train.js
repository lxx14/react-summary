import React from 'react';

const Train = (props) => {
  return (
    <div className='train'>
      <h1>Train</h1>
      <h3>My training accounts:</h3>
      <ul>
        <li>On Codepen: <a href="https://codepen.io/lxx1427/" target="blank"><i className="fab fa-codepen"></i></a></li>
        <li>On Bitbucket: <a href="https://lxx1427@bitbucket.org" target="blank"><i className="fab fa-bitbucket"></i></a></li>
        <li>On Git: <a href="https://github.com/lxx14?tab=repositories" target="blank"><i className="fab fa-github-square"></i></a></li>
      </ul>
    </div>
  )
}

export default Train;